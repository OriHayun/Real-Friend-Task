import { PropertyStatusEnum } from "../models/enums/propertyStatus";

export default function setStatusColor(status: string): string {
    switch (status) {
        case PropertyStatusEnum.AVAILABLE:
            return '#10cf0c';
        case PropertyStatusEnum.SOLD:
        case PropertyStatusEnum.CONTRACT_SIGNED:
        case PropertyStatusEnum.RENTED:
            return '#5a5c5a'
        case PropertyStatusEnum.REMOVED:
        case PropertyStatusEnum.EXPIRED:
            return '#d10d20';
        case PropertyStatusEnum.WITHDRAWN || PropertyStatusEnum.TOM:
            return '#ccbc0c';
        default:
            return '#000000'
    }
}