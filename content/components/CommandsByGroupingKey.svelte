<script context="module" lang="ts">
  export const EmptyKey = Symbol("empty key");
</script>

<script lang="ts">
  import CommandTable, { type OptionsType } from "./CommandTable.svelte";
  import {
    tsk_commands,
    Layer,
    type LayerTypes,
    type CommandEntry,
  } from "./tsk_commands";

  export let data: CommandEntry[];
  export let groupingKey: (object: CommandEntry) => string;
  
  /**
   * You could pop in EmptyKey here, and set showItemsWithEmptyKey=false 
   * in order to control the positioning of the empty key group
   */
  export let keys: string[] = [];

  export let tableOptions: OptionsType;
  export let showItemsWithEmptyKey: boolean = true

  let commandsByGroupingKey: {
    [_: string]: CommandEntry[];
    [EmptyKey]?: CommandEntry[];
  } = data
    .filter(({ layer }) => !!layer)
    .reduce(
      (obj, cur) => {
        const key = groupingKey(cur) ?? EmptyKey;
        return { ...obj, [key]: [...(obj[key] ?? []), cur] };
      },
      <any>{}
    );

  if (!keys.length) {
    keys = Object.keys(commandsByGroupingKey);
  }
</script>

{#each keys.filter((v) => !!v) as key (key)}
  <slot name="header" {key}>
    <h3>{key}</h3>
  </slot>
  <CommandTable
    options={tableOptions}
    on:category
    data={commandsByGroupingKey[key]}
  />
{/each}

{#if showItemsWithEmptyKey && commandsByGroupingKey[EmptyKey]?.length}
  <slot name="emptyHeader">
    <h3>Empty Grouping Key</h3>
  </slot>
  <CommandTable
    options={tableOptions}
    on:category
    data={commandsByGroupingKey[EmptyKey]}
  />
{/if}
