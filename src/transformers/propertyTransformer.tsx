import { Property } from "../models/types/property";
import { PropertyCategoryEnum } from '../models/enums/propertyCategory';
import { PropertyStatusEnum } from "../models/enums/propertyStatus";
import { PropertyDto } from "../models/dto/propertyDto";

export default function dtoToDm(dto: PropertyDto): Property {
    return {
        id: dto._id,
        address: {
            address: dto?.address?.address,
            street: dto?.address?.street,
            borough: dto?.address?.borough,
            unitNumber: dto?.address?.unitNumber,
            postalCode: dto?.address?.postalCode,
            houseNumber: dto?.address?.houseNumber,
            city: dto?.address?.city,
            schoolZones: dto?.address?.schoolZones?.map((schoolZone: string) => schoolZone)
        },
        category: dto?.category === 'APT_RENT' ? PropertyCategoryEnum.APT_RENT : PropertyCategoryEnum.SALE,
        price: dto?.originalPrice,
        status: transformStatusToEnum(dto?.leaseData?.status),
        description: dto?.content,
        agentDetails: 'Agent Details',
        coordinates: {
            latitude: dto.coords.lat,
            longitude: dto.coords.lng
        },
        favorite: dto.favorite,
        images: dto.photos?.map((photo: string) => photo)
    }
}

const transformStatusToEnum = (status: string): PropertyStatusEnum => {
    switch (status) {
        case 'Available':
            return PropertyStatusEnum.AVAILABLE;
        case 'Sold':
            return PropertyStatusEnum.SOLD;
        case 'Rented':
            return PropertyStatusEnum.RENTED;
        case 'Removed':
            return PropertyStatusEnum.REMOVED;
        case 'Withdrawn':
            return PropertyStatusEnum.WITHDRAWN;
        case 'TOM 30 Days':
            return PropertyStatusEnum.TOM;
        case 'Expired':
            return PropertyStatusEnum.EXPIRED;
        case 'Contract Signed':
            return PropertyStatusEnum.CONTRACT_SIGNED;
        default:
            return PropertyStatusEnum.UNSET
    }
}