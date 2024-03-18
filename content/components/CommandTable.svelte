<script context="module" lang="ts">
  export const DefaultOptions = {
    showLayer: true,
    showCategory: true,
    interactCategory: false,
    underlineCategory: false,
    showTableOutline: true,
    sortByCommandName: false,
  };
  export type OptionsType = Partial<typeof DefaultOptions>;
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatchEvent = createEventDispatcher();

  import { Layer, type CommandEntry } from "./tsk_commands";

  export let data: CommandEntry[];
  $: if (options.sortByCommandName) {
    data = data.sort((a, b) => a.command.localeCompare(b.command));
  }

  export let options: OptionsType = DefaultOptions;
  $: options = { ...DefaultOptions, ...(options ?? {}) };
</script>

<table class:outlined={options.showTableOutline}>
  <thead>
    <th>Command</th>
    {#if options.showLayer}<th>Layer</th>{/if}
    {#if options.showCategory}<th>Category</th>{/if}
    <th>Description</th>
  </thead>
  <tbody>
    {#each data as entry (entry.command)}
      <slot name="entry" {entry}>
        <tr>
          <td class="command"><code>{entry.command}</code></td>
          {#if options.showLayer}<td class="layer"
              >{(entry.layer && Layer[entry.layer]) || "-"}</td
            >{/if}
          {#if options.showCategory}<td
              class:interact={options.interactCategory}
              class:underline={options.underlineCategory}
              class="category"
              on:click={() =>
                entry.category && dispatchEvent("category", entry.category)}
              >{entry.category ?? ""}</td
            >{/if}
          <td class="description">{entry.description?.trim() ?? "-"}</td>
        </tr>
      </slot>
    {/each}
  </tbody>
</table>

<style lang="scss">
  td.category {
    text-align: center;

    &:not(:empty) {
      &.interact:hover,
      &.underline {
        text-decoration: dotted underline;
        cursor: pointer;
      }
    }

    &:empty::after {
      content: "-";
    }
  }

  table {
    border-collapse: collapse;

    &.outlined {
      $borderStyle: 1px solid rgba(255, 255, 255, 0.2);
      td:not(:first-child) {
        border-left: $borderStyle;
      }
      tr:not(:first-child) {
        border-top: $borderStyle;
      }
    }
  }
</style>
