import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import {VarletUIResolver} from 'unplugin-vue-components/resolvers'
import {createHtmlPlugin} from 'vite-plugin-html'

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

export default defineConfig((env) => {
    return {
        plugins: [
            vue(),
            components({
                resolvers: [VarletUIResolver()]
            }),
            autoImport({
                resolvers: [VarletUIResolver({autoImport: true})]
            }),
            createHtmlPlugin({
                inject: {
                    data: {
                        ...loadEnv(env.mode, process.cwd())
                    }
                }
            })
        ],
        build: {
            outDir: 'docs',
            rollupOptions: {
                output: {
                    sanitizeFileName(fileName) {
                        const match = DRIVE_LETTER_REGEX.exec(fileName);
                        const driveLetter = match ? match[0] : "";
                        return (
                            driveLetter +
                            fileName.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
                        );
                    },
                }
            }
        },
    }
})
