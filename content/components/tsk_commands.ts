export const Layer = {
    automated: 'Fully Automated',
    fs: 'File System',
    fn: 'File Name',
    meta: 'Metadata',
    blk: 'Block / Data Unit',
    fsj: 'File System Journal',
    vol: 'Volume',
    img: 'Image',
    disk: 'Disk',
    misc: 'Other'
}

export type LayerTypes = keyof typeof Layer

export type CommandEntry = {
    command: string,
    category?: string
    layer: keyof typeof Layer
    description?: string
}

export const tsk_commands: CommandEntry[] = [
    { command: 'tsk_comparedir', layer: 'automated', description: 'Compares a local directory hierarchy with the contents of raw device (or disk image). This can be used to detect rootkits' },
    { command: 'tsk_gettimes', layer: 'automated', description: "Extracts all of the temporal data from the image to make a timeline. Equivalent to running fls with the '-m'option." },
    { command: 'tsk_loaddb', layer: 'automated', description: 'Loads the metadata from an image into a SQLite database. This allows other tools to be easily written in a variety of languages and give them access to the image contents' },
    { command: 'tsk_recover', layer: 'automated', description: 'Extracts the unallocated (or allocated) files from a disk image to a local directory.' },
    { command: 'fsstat', layer: 'fs', category: 'stat', description: 'Shows file system details and statistics including layout, sizes, and labels.' },
    { command: 'ffind', layer: 'fn', description: 'Finds allocated and unallocated file names that point to a given meta data structure.' },
    { command: 'fls', layer: 'fn', category: 'ls', description: 'Lists allocated and deleted file names in a directory.' },
    { command: 'icat', layer: 'meta', category: 'cat', description: 'Extracts the data units of a file, which is specified by its meta data address (instead of the file name).' },
    { command: 'ifind', layer: 'meta', description: 'Finds the meta data structure that has a given file name pointing to it or the meta data structure that points to a given data unit.' },
    { command: 'ils', layer: 'meta', category: 'ls', description: 'Lists the meta data structures and their contents in a pipe delimited format.' },
    { command: 'istat', layer: 'meta', category: 'stat', description: 'Displays the statistics and details about a given meta data structure in an easy to read format.' },
    { command: 'blkcat', layer: 'blk', category: 'cat', description: 'Extracts the contents of a given data unit.' },
    { command: 'blkls', layer: 'blk', category: 'ls', description: 'Lists the details about data units and can extract the unallocated space of the file system.' },
    { command: 'blkstat', layer: 'blk', category: 'stat', description: 'Displays the statistics about a given data unit in an easy to read format.' },
    { command: 'blkcalc', layer: 'blk', description: 'Calculates where data in the unallocated space image (from blkls) exists in the original image. This is used when evidence is found in unallocated space.' },
    { command: 'jcat', layer: 'fsj', category: 'cat', description: 'Display the contents of a specific journal block.' },
    { command: 'jls', layer: 'fsj', category: 'ls', description: 'List the entries in the file system journal.' },
    { command: 'mmls', layer: 'vol', category: 'ls', description: 'Displays the layout of a disk, including the unallocated spaces.' },
    { command: 'mmstat', layer: 'vol', category: 'stat', description: 'Display details about a volume system (typically only the type).' },
    { command: 'mmcat', layer: 'vol', category: 'cat', description: 'Extracts the contents of a specific volume.' },
    { command: 'img_stat', layer: 'img', category: 'stat', description: 'Shows the details of the image format' },
    { command: 'img_cat', layer: 'img', category: 'cat', description: 'Shows the raw contents of an image file.' },
    { command: 'disk_sreset', layer: 'disk', description: 'This tool will temporarily remove a HPA if one exists. After the disk is reset, the HPA will return.' },
    { command: 'disk_stat', layer: 'disk', description: 'This tool will show if an HPA exists.' },
    { command: 'hfind', layer: 'misc', description: 'Uses a binary sort algorithm to lookup hashes in the NIST NSRL, Hashkeeper, and custom hash databases created by md5sum.' },
    { command: 'mactime', layer: 'misc', description: 'Takes input from the fls and ils tools to create a timeline of file activity.' },
    { command: 'sorter', layer: 'misc', description: 'Sorts files based on their file type and performs extension checking and hash database lookups.' },
    { command: 'sigfind', layer: 'misc', description: 'Searches for a binary value at a given offset. Useful for recovering lost data structures.' },
]
