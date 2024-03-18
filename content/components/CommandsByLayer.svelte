<script lang="ts">
  import CommandGroup from "./CommandGroup.svelte";
  import {
    tsk_commands,
    Layer,
    type LayerTypes,
    type CommandEntry,
  } from "./tsk_commands";

  export let interactCategory: boolean = true;
  import CommandsByGroupingKey from "./CommandsByGroupingKey.svelte";

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

</script>

<CommandsByGroupingKey groupingKey={(obj) => obj.layer} keys={visibleLayers} data={tsk_commands}>
  <h3 slot="header" let:key>{Layer[key]}</h3>
</CommandsByGroupingKey>
