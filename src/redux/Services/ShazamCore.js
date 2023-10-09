import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';



    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core7.p.rapidapi.com/v1',
            prepareHeaders: () => {
              headers.set('X-RapidAPI-Key' , 'd37724f31amsh5b7b473995b9699p1d')
              
              return headers;
            },
        }),
        endpoints: (builder) => ({
          getTopCharts: builder.query({ wuery: '/charts/world'}),
        }),
     });