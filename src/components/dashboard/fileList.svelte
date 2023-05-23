<script>
    import Folder from "../dashboard/folder.svelte";
    import { root } from "../../stores";
</script>

<p class="p-1 bg-body-secondary border text-center">Folder Structure</p>
<p class="text-body-secondary">You can expand and close the folder structure by clicking on the folder name.</p>
<Folder name="Home" files={$root[0].files} expanded />
