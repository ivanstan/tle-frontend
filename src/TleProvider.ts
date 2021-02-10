export class TleProvider {

  public static API = 'https://tle.ivanstanojevic.me';

  public async search(query: string | null = null) {

    let url: string = TleProvider.API + '/api/tle';

    if (query !== null) {
      url += '?search=' + query;
    }

    const response = await fetch(url);

    return await response.json();
  }

}
