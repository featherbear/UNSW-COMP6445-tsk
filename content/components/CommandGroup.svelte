<script lang="ts">
  import { Layer, type Entry } from "./tsk_commands";
  export let data: Entry[];
  export let showLayer: boolean = true;
  export let showCategory: boolean = true;
</script>

<table>
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
          <td>{entry.command}</td>
          {#if showLayer}<td>{(entry.layer && Layer[entry.layer]) || "-"}</td>{/if}
          {#if showCategory}<td>{entry.category ?? "-"}</td>{/if}
          <td>{entry.description?.trim() ?? "-"}</td>
        </tr>
      </slot>
    {/each}
  </tbody>
</table>
