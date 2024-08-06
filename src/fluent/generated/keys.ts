import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '6668a5c4d10440729179a6059cb488e9'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '2af6e44f9a4a498ea2bb156a9aeed429'
                    }
                }
            }
        }
    }
}
