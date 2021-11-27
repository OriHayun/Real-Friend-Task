import { Property } from "../models/types/property";
import { PropertyCategoryEnum } from '../models/enums/propertyCategory';

export default function dtoToDm(dto: any): Property {
    return {
        id: dto._id.$oid,
        address: {
            street: dto.address.street,
            borough: dto.address.borough,
            unitNumber: dto.address.unitNumber,
            postalCode: dto.address.postalCode,
            houseNumber: dto.address.houseNumber,
            city: dto.address.city,
            schoolZones: dto.address.schoolZones.map((schoolZone: string) => schoolZone)
        },
        category: dto.category === 'APT_RENT' ? PropertyCategoryEnum.APT_RENT : PropertyCategoryEnum.SALE,
        price: dto.originalPrice,
        status: '',
        description: dto.content,
        agentDetails: {
            id: ''
        },
        coordinates: {
            latitude: dto.coords.lat,
            longitude: dto.coords.lng
        },
        favorite: false,
        images: dto.photos?.map((photo: string) => photo)
    }
}