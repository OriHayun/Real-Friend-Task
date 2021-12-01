export type PropertyLeaseDataDto = {
    terms: string,
    kind: string,
    status: string,
    statusChangeDate: string | null,
    depositAmount: string | null,
    minLeaseLength: number,
    maxLeaseLength: number
}