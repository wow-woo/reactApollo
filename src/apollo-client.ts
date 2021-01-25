import { ApolloClient, InMemoryCache , makeVar} from '@apollo/client';

export const reactiveVar = makeVar(false);

export const client = new ApolloClient({
    uri: 'https://nestpodcats.herokuapp.com/graphql',
    cache: new InMemoryCache({
        typePolicies:{
            Query:{
                fields:{
                    isLoggedIn:{
                        read(){
                            return reactiveVar()
                        }
                    }
                }
            }
        }
    })
})