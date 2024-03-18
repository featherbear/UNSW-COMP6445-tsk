<script context="module" lang="ts">
  export const DefaultOptions = {
    showLayer: true,
    showCategory: true,
    interactCategory: false,
    underlineCategory: false,
    showTableOutline: true,
  };
  export type OptionsType = Partial<typeof DefaultOptions>
</script>

<script lang="ts">
  import { Layer, type CommandEntry } from "./tsk_commands";
  export let data: CommandEntry[];

  import { createEventDispatcher } from "svelte";
  const dispatchEvent = createEventDispatcher();

  export let options: OptionsType = DefaultOptions;
  options = { ...DefaultOptions, ...(options ?? {}) };
  // export let showLayer: boolean = true;
  // export let showCategory: boolean = true;
  // export let interactCategory: boolean = false;
  // export let underlineCategory: boolean = false;
  // export let showTableOutline: boolean = false;
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
