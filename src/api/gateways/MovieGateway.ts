import { AxiosResponse } from 'axios'
import { inject, injectable } from 'inversify'

import HttpClient from '../HttpClient'
import SERVICE_IDENTIFIER from '../../../identifiers'

@injectable()
export default class MovieGateway {
    private resource = 'https://api.themoviedb.org/3/';

    public constructor(
        @inject(SERVICE_IDENTIFIER.HTTP_CLIENT)
        private httpClient: HttpClient,
    ) {
        //
    }

    public async listMovies(page = 1): Promise<AxiosResponse> {
        return this.httpClient.instance.get(
            `${this.resource}/list/${page}?api_key=${this.httpClient.apiKey}`,
        )
    }

    public async fetchMovie(id: number): Promise<AxiosResponse> {
        return this.httpClient.instance.get(
            `${this.resource}/movie/${id}?api_key=${this.httpClient.apiKey}`,
        )
    }

    public async fetchTrailer(id: number): Promise<AxiosResponse> {
        return this.httpClient.instance.get(
            `${this.resource}/movie/${id}/videos?api_key=${this.httpClient.apiKey}`,
        )
    }
}
