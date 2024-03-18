<script lang="ts">
  import CommandGroup from "./CommandGroup.svelte";
  import {
    tsk_commands,
    Layer,
    type LayerTypes,
    type CommandEntry,
  } from "./tsk_commands";

  export let data: CommandEntry[];
  export let groupingKey: (object: CommandEntry) => string;
  export let keys: string[] = [];

  export let interactCategory: boolean = true;

  let commandsByGroupingKey: { [_: string]: CommandEntry[] } = data
    .filter(({ layer }) => !!layer)
    .reduce(
      (obj, cur) => {
        const key = groupingKey(cur);
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
  <CommandGroup
    {interactCategory}
    on:category
    data={commandsByGroupingKey[key]}
  />
{/each}
