import { validate } from 'app';
import { NextFunction, Request, Response, Router } from 'express';
import {
    createColor,
    deleteMany,
    deleteOne,
    findByNameColor,
    getByID,
    getColor,
    getColorListID,
    updateColor,
} from '~/controller';
import {
    CreateColorBody,
    UpdateColorBody,
} from '~/interface/request/body';
import {
    ColorFindByNameQuery,
    ColorFindQuery,
} from '~/interface/request/query';
import { ColorValidator } from '~/middleware/validator';

export const router: Router = Router();

router.get(
    '/',
    async (req: Request, _: Response, next: NextFunction) => {
        const query = req.query as unknown as ColorFindQuery;
        const result = await getColor(query);
        next(result);
    },
);

router.get(
    '/:id',
    async (req: Request, _: Response, next: NextFunction) => {
        const id: string = req.params.id;
        const result = await getByID({ id });
        next(result);
    },
);

router.post(
    '/findByName',
    async (req: Request, _: Response, next: NextFunction) => {
        const body = req.body as ColorFindByNameQuery;
        const result = await findByNameColor(body);
        next(result);
    },
);

router.post(
    '/list-id',
    async (req: Request, _: Response, next: NextFunction) => {
        const { id_color }: { id_color: string[] } = req.body;
        const result = await getColorListID({ id_color });
        next(result);
    },
);

router.post(
    '/',
    validate.body(ColorValidator),
    async (req: Request, _: Response, next: NextFunction) => {
        const body = req.body as CreateColorBody;
        const result = await createColor(body);
        next(result);
    },
);

router.put(
    '/',
    validate.body(ColorValidator),
    async (req: Request, _: Response, next: NextFunction) => {
        const body = req.body as UpdateColorBody;
        const result = await updateColor(body);
        next(result);
    },
);

router.put(
    '/delete',
    async (req: Request, _: Response, next: NextFunction) => {
        const id: string = req.body.id;
        const result = await deleteOne({ id });
        next(result);
    },
);

router.put(
    '/delete-many',
    async (req: Request, _: Response, next: NextFunction) => {
        const id: string[] = req.body.id;
        const result = await deleteMany({ id });
        next(result);
    },
);
