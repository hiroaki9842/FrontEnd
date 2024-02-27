const apiUrl = 'https://basis-public.221616.com/api/shops/search';
export async function fetchShopData(requestParams) {
    const stringParams = {
        prefecture_cd: requestParams.prefecture_cd,
    };
    const urlParams = new URLSearchParams(stringParams);
    const url = `${apiUrl}?${urlParams}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`異常なレスポンスです: ${response.status}`);
        }
        const data = await response.json();
        return { shop: data };
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('店舗取得API中にエラーが発生しました:', error.message);
        }
        else {
            console.error('店舗取得API中に不明なエラーが発生しました:', error);
        }
        throw error;
    }
}
//# sourceMappingURL=api_service.js.map