import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: ['src/graphql/**/*.tsx'],
  watch: true,
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: ['typescript'],
      config: {
        avoidOptionals: {
            field: true,
            inputValue: true,
            object: true,
            defaultValue: true
        }
      }
    }
  }
}
 
export default config