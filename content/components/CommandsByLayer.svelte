<script lang="ts">
  import CommandGroup from "./CommandGroup.svelte";
  import {
    tsk_commands,
    Layer,
    type LayerTypes,
    type CommandEntry,
  } from "./tsk_commands";

  let commandsbyLayer: { [layer in LayerTypes]: CommandEntry[] } = tsk_commands
    .filter(({ layer }) => !!layer)
    .reduce(
      (obj, cur) => ({ ...obj, [cur.layer]: [...(obj[cur.layer] ?? []), cur] }),
      <any>{}
    );

  const visibleLayers: LayerTypes[] = ["disk", "blk"];
</script>

{#each visibleLayers.filter((v) => !!v) as layer (layer)}
  <h4>{Layer[layer]}</h4>
  <CommandGroup data={commandsbyLayer[layer]} showLayer={false} />
{/each}

<!-- <CommandGroup data={commandsbyLayer["automated"]} /> -->
<!-- <CommandGroup data={commandsbyLayer["blk"]} /> -->
