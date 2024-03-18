<script lang="ts">
  import { Layer, type CommandEntry } from "./tsk_commands";
  export let data: CommandEntry[];
  export let showLayer: boolean = true;
  export let showCategory: boolean = true;

  import { createEventDispatcher } from "svelte";
  const dispatchEvent = createEventDispatcher();
  export let interactCategory: boolean = false;
  export let underlineCategory: boolean = false;

  export let showTableOutline: boolean = false;
</script>

<table class="outlined">
  <thead>
    <th>Command</th>
    {#if showLayer}<th>Layer</th>{/if}
    {#if showCategory}<th>Category</th>{/if}
    <th>Description</th>
  </thead>
  <tbody>
    {#each data as entry (entry.command)}
      <slot name="entry" {entry}>
        <tr>
          <td class="command"><code>{entry.command}</code></td>
          {#if showLayer}<td class="layer">{(entry.layer && Layer[entry.layer]) || "-"}</td
            >{/if}
          {#if showCategory}<td
              class:interact={interactCategory}
              class:underline={underlineCategory}
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

    $borderStyle: 1px solid rgba(255, 255, 255, 0.2);
    td:not(:first-child) {
      border-left: $borderStyle;
    }
    tr:not(:first-child) {
      border-top: $borderStyle;
    }
  }
</style>
