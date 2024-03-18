<script lang="ts">
  import CommandGroup from "./CommandGroup.svelte";
  import {
    tsk_commands,
    Layer,
    type LayerTypes,
    type CommandEntry,
  } from "./tsk_commands";



  export let interactCategory: boolean = true

  let commandsByLayer: { [layer in LayerTypes]: CommandEntry[] } = tsk_commands
    .filter(({ layer }) => !!layer)
    .reduce(
      (obj, cur) => ({ ...obj, [cur.layer]: [...(obj[cur.layer] ?? []), cur] }),
      <any>{}
    );


  const visibleLayers: LayerTypes[] = [
    "automated",
    "fs",
    "fn",
    "meta",
    "blk",
    "fsj",
    "vol",
    "img",
    "disk",
    "misc",
  ];

  visibleLayers.forEach((layer) => {
    if (!commandsByLayer[layer]) {
      throw new Error(`No commands for layer [${layer}]`);
    }
  });
</script>

{#each visibleLayers.filter((v) => !!v) as layer (layer)}
  <h3>{Layer[layer]}</h3>
  <CommandGroup {interactCategory} on:category data={commandsByLayer[layer]} showLayer={false} />
{/each}
