import { StatusCodes } from "http-status-codes";

export type ErrorType = {
    code: string;
    message: string;
    statusCode: StatusCodes;
}

export const ERRORS = {
    ROUTE_NOT_FOUND: {
        code: 'PIMS_01',
        message: 'Route not found',
        statusCode: StatusCodes.NOT_FOUND,
    },
    SUPPLIER: {
        NOT_FOUND: {
            code: 'PIMS_SUP_01',
            message: 'Supplier Not Found',
            statusCode: StatusCodes.NOT_FOUND,
        },
        SID_IS_MANDATORY: {
            code: 'PIMS_SUP_02',
            message: 'Supplier ID is mandatory',
            statusCode: StatusCodes.BAD_REQUEST,
        },
        NAME_IS_MANDATORY: {
            code: 'PIMS_SUP_03',
            message: 'Supplier Name is mandatory',
            statusCode: StatusCodes.BAD_REQUEST,
        },
        CONTACT_INFO_IS_MANDATORY: {
            code: 'PIMS_SUP_04',
            message: 'Supplier Contact Information is mandatory',
            statusCode: StatusCodes.BAD_REQUEST,
        },
    },
    PRODUCT: {
        NOT_FOUND: {
            code: 'PIMS_PROD_01',
            message: 'Product Not Found',
            statusCode: StatusCodes.NOT_FOUND,
        },
        PID_IS_MANDATORY: {
            code: 'PIMS_PROD_02',
            message: 'Product ID is mandatory',
            statusCode: StatusCodes.BAD_REQUEST,
        },
        NAME_IS_MANDATORY: {
            code: 'PIMS_PROD_03',
            message: 'Product Name is mandatory',
            statusCode: StatusCodes.BAD_REQUEST,
        },
        SID_IS_MANDATORY: {
            code: 'PIMS_PROD_04',
            message: 'Product Supplier ID is mandatory',
            statusCode: StatusCodes.BAD_REQUEST,
        },
        PRICE_IS_MANDATORY: {
            code: 'PIMS_PROD_05',
            message: 'Product Price is mandatory',
            statusCode: StatusCodes.BAD_REQUEST,
        },
        STOCK_IS_MANDATORY: {
            code: 'PIMS_PROD_06',
            message: 'Product Stock Quantity is mandatory',
            statusCode: StatusCodes.BAD_REQUEST,
        },
        IMAGES_LIMIT_REACHED: {
            code: 'PIMS_PROD_07',
            message: 'Product Max Images limit reached - 10',
            statusCode: StatusCodes.BAD_REQUEST,
        }
    }
}
