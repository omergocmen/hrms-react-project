export const CHANGE_PAGE="CHANGE_PAGE"
export const CHANGE_TOTAL_PAGE="CHANGE_TOTAL_PAGE"

export function changePage(pageNumber){
    return {
        type:CHANGE_PAGE,
        payload:pageNumber
    }
}
export function changeTotalPage(pageNumber){
    return {
        type:CHANGE_TOTAL_PAGE,
        payload:pageNumber
    }
}
