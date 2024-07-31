import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '1ff7dcb9bf224daa94dea0206c89ce9b'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '51ecf4de587941889e4860400d459c09'
                    }
                }
            }
        }
    }
}
