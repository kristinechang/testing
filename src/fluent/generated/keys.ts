import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '2cb18caf060b47b3bef781bdeb41584d'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '40cfa5d1993a454e80e4de15160f743c'
                    }
                }
            }
        }
    }
}
