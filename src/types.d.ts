declare module '@pixi/display' {
    export {
        DisplayObject,
        Container,
    } from 'pixi.js';
}

declare module '@pixi/graphics' {
    export {
        Graphics,
    } from 'pixi.js';
}

declare module '@pixi/sprite' {
    export {
        Sprite,
    } from 'pixi.js';
}

declare module '@pixi/core' {
    import { AbstractBatchRenderer } from 'pixi.js'

    export const
        BatchRenderer: (...params: any[]) => AbstractBatchRenderer

    export {
        Renderer,
    } from 'pixi.js'
}

declare module '@pixi/ticker' {
    export {
        Ticker,
    } from 'pixi.js'

    /**
* Represents the update priorities used by internal PIXI classes when registered with
* the {@link PIXI.Ticker} object. Higher priority items are updated first and lower
* priority items, such as render, should go later.
*
* @static
* @constant
* @name UPDATE_PRIORITY
* @memberof PIXI
* @enum {number}
* @property {number} INTERACTION=50 Highest priority, used for {@link PIXI.InteractionManager}
* @property {number} HIGH=25 High priority updating, {@link PIXI.VideoBaseTexture} and {@link PIXI.AnimatedSprite}
* @property {number} NORMAL=0 Default priority for ticker events, see {@link PIXI.Ticker#add}.
* @property {number} LOW=-25 Low priority used for {@link PIXI.Application} rendering.
* @property {number} UTILITY=-50 Lowest priority used for {@link PIXI.BasePrepare} utility.
*/
    export const enum UPDATE_PRIORITY {
        INTERACTION = 50,
        HIGH = 25,
        NORMAL = 0,
        LOW = -25,
        UTILITY = -50
    }
}