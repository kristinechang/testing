import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: 'fc5432d896a74fc99a45e39a6d533a76'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '49c6390b08ce4d07875f4e54578f90db'
                    }
                }
            }
        }
    }
}
