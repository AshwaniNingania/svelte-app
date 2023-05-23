<script>
    import { onMount } from "svelte";
    import { folderId, root } from "../.././stores";

    let name;
    let filetype;
    let parentFolderId = 0;
    let folders = [];

    onMount(() => {
        updateFolders($root);
    });

    function savefile() {
        if (!name || (filetype != "file" && filetype != "folder")) {
            alert("please enter all details properly");
            return;
        }

        let newFile;

        if (filetype == "folder") {
            $folderId = $folderId + 1;
            newFile = {
                id: $folderId,
                name: name,
                files: [],
            };
        } else {
            newFile = {
                name: name,
            };
        }

        updateDirectory($root, newFile);
        $root = $root;
        folders = [];
        updateFolders($root);
        reset();
    }

    function reset() {
        name = undefined;
        filetype = "Choose";
        parentFolderId = 0;
    }

    function updateDirectory(files, newFile) {
        files.forEach((file) => {
            if (file.id == parentFolderId) {
                file.files = [...file.files, newFile];
            }
            if (file.files) {
                updateDirectory(file.files, newFile);
            }
        });
    }

    function updateFolders(files) {
        files.forEach((file) => {
            if (file.files) {
                folders = [
                    ...folders,
                    {
                        id: file.id,
                        name: file.name,
                    },
                ];
                updateFolders(file.files);
            }
        });
    }
</script>

<form on:submit|preventDefault={savefile}>
    <div class="row">
        <div class="col-8">
            <label class="visually-hidden" for="autoSizingInput">
                File/Folder name
            </label>
            <input
                type="text"
                class="form-control"
                id="autoSizingInput"
                bind:value={name}
                placeholder="Enter your file/folder name"
            />
        </div>

        <div class="col-4">
            <label class="visually-hidden" for="autoSizingSelect">
                File type
            </label>
            <select
                class="form-select"
                id="autoSizingSelect"
                bind:value={filetype}
            >
                <option selected value="Choose">Choose...</option>
                <option value="file">File</option>
                <option value="folder">Folder</option>
            </select>
        </div>
    </div>

    <div class="row align-items-center p-3">
        {#if filetype == "file" || filetype == "folder"}
            <div class="col-8">
                <select
                    class="form-select"
                    id="autoSizingSelect"
                    bind:value={parentFolderId}
                >
                    {#each folders as file}
                        <option value={file.id}> {file.name} </option>
                    {/each}
                </select>
            </div>

            <div class="col-2">
                <button type="submit" class="btn btn-success">Save</button>
            </div>
            <div class="col-2">
                <button type="button" on:click={reset} class="btn btn-primary"
                    >Cancel</button
                >
            </div>
        {/if}
    </div>
</form>
