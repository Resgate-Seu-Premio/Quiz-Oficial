import {
    r as _0x42469f,
    u as _0x12a0ae,
    j as _0xe52f5e,
    S as _0x4d4102,
    a as _0x502b9a,
    T as _0x2e4cba,
    b as _0x3051d7,
    R as _0x41c418,
    c as _0x787444,
    d as _0x4b518c,
    E as _0x271ba7,
    e as _0x3db633,
    f as _0x57df1c,
    g as _0xde8ca9,
    h as _0x3b308b,
    i as _0x482ced,
    k as _0x3b9fa1,
    l as _0x224eb1,
    m as _0x2a17fb,
    I as _0x28f8b7,
    n as _0x5d3dc1,
    F as _0x5220a9,
    o as _0x4d1461,
    p as _0x3315d0
} from './bk-index-8eb38c14.js';
function DefaultCollectionStarSection({
    reviewAmount: _0x3582f2,
    averageRating: _0x24d439
}) {
    const _0x5e9aca = _0x42469f['useRef'](null);
    const _0x3460a4 = _0x12a0ae(_0x5e9aca);
    return _0xe52f5e['jsx']('div', {
        'ref': _0x5e9aca,
        'className': 'tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md',
        'style': { 'justifyContent': _0x3460a4 },
        'children': _0xe52f5e['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0xe52f5e['jsx'](_0x4d4102, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20mb-[1px]',
                    'averageRating': _0x24d439
                }),
                _0xe52f5e['jsxs']('p', {
                    'className': 'tw-text-[max(14px,_1rem)]\x20tw-leading-[normal]',
                    'children': [
                        '(',
                        _0x3582f2,
                        ')'
                    ]
                })
            ]
        })
    });
}
function PianoCollectionStarSection({
    reviewAmount: _0x13370d,
    averageRating: _0x3437df
}) {
    const _0x59932b = _0x42469f['useRef'](null);
    const _0x18d2f9 = _0x12a0ae(_0x59932b);
    return _0xe52f5e['jsx']('div', {
        'className': 'tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md\x20tw-items-center',
        'style': { 'justifyContent': _0x18d2f9 },
        'children': _0xe52f5e['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0xe52f5e['jsx'](_0x502b9a, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20tw-mb-[1px]',
                    'averageRating': _0x3437df
                }),
                _0xe52f5e['jsxs']('p', {
                    'className': 'tw-text-[max(14px,_1rem)]',
                    'children': [
                        '(',
                        _0x13370d,
                        ')'
                    ]
                })
            ]
        })
    });
}
function collectionStarSectionFactory({
    theme: _0x116fa7,
    componentProps: _0x41f4d7
}) {
    const {
        reviewAmount: _0x57b9b4,
        averageRating: _0x3f1df6
    } = _0x41f4d7;
    const _0x2c6156 = {
        'default': _0xe52f5e['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x57b9b4,
            'averageRating': _0x3f1df6
        }),
        'sol': _0xe52f5e['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x57b9b4,
            'averageRating': _0x3f1df6
        }),
        'classic': _0xe52f5e['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x57b9b4,
            'averageRating': _0x3f1df6
        }),
        'wide': _0xe52f5e['jsx'](DefaultCollectionStarSection, {
            'reviewAmount': _0x57b9b4,
            'averageRating': _0x3f1df6
        }),
        'piano': _0xe52f5e['jsx'](PianoCollectionStarSection, {
            'reviewAmount': _0x57b9b4,
            'averageRating': _0x3f1df6
        })
    };
    return _0x2c6156[_0x116fa7] ?? _0x2c6156['default'];
}
function CollectionStarSection({
    theme: _0x214ec7,
    reviewAmount: _0x2980b5,
    averageRating: _0x3058ae
}) {
    const _0x50f4b5 = collectionStarSectionFactory({
        'theme': _0x214ec7,
        'componentProps': {
            'reviewAmount': _0x2980b5,
            'averageRating': _0x3058ae
        }
    });
    return _0xe52f5e['jsx']('div', {
        'className': 'tw-my-[0.75rem]',
        'children': _0x50f4b5
    });
}
const getStoreProducts = async _0x2b7158 => {
    const _0x3fc49a = 0xfa;
    const _0x2817b2 = 'https://' + _0x2b7158 + '/products.json?limit=' + _0x3fc49a;
    const _0x124c24 = 0x5;
    let _0x5df8ff = 0x3;
    let _0x211f3b = [];
    let _0x14f3c1 = ![];
    for (let _0x543fa5 = 0x0; _0x543fa5 < _0x5df8ff; _0x543fa5++) {
        await Promise['all'](new Array(_0x124c24)['fill'](0x0)['map'](async (_0x3e9dc6, _0x77bd34) => {
            const _0x3fb7a3 = _0x124c24 * _0x543fa5 + _0x77bd34 + 0x1;
            const _0xeaf643 = _0x2817b2 + '&page=' + _0x3fb7a3;
            const _0x3d8ea0 = await _0x3051d7['get'](_0xeaf643);
            if (_0x3d8ea0['status'] !== 0xc8) {
                console['error']('Failed\x20to\x20fetch\x20products\x20from\x20' + _0xeaf643);
                return;
            }
            const _0x100a8c = _0x3d8ea0['data']['products'];
            _0x211f3b = _0x211f3b['concat'](_0x100a8c);
            if (_0x100a8c['length'] < _0x3fc49a) {
                _0x14f3c1 = !![];
            }
        }));
        if (_0x14f3c1) {
            break;
        }
    }
    return _0x211f3b;
};
const insertProductStatistics = (_0x2f38d5, _0x141a6a, _0x52ca97, _0xcef374, _0xb4f40c) => {
    const {
        averageRating: _0x3fa6f0,
        reviewAmount: _0x2b01ce
    } = _0x2f38d5;
    if (_0x141a6a['querySelector']('.collection-star-section[data-product-id=\x22' + _0xcef374 + '\x22]')) {
        return;
    }
    if (_0xb4f40c && !_0x2b01ce)
        return;
    const _0x6badc = document['createElement']('div');
    _0x6badc['classList']['add']('collection-star-section', 'bk-reviews', _0x52ca97);
    _0x6badc['setAttribute']('data-product-id', _0xcef374);
    _0x6badc['style']['textAlign'] = 'inherit';
    _0x141a6a['style']['margin'] = '0';
    const _0x4a5b85 = _0x141a6a['parentElement'];
    if (!_0x4a5b85)
        return;
    const _0x496af9 = _0x141a6a['nextElementSibling'];
    if (_0x496af9) {
        _0x496af9['style']['setProperty']('margin-top', '0');
        _0x4a5b85['insertBefore'](_0x6badc, _0x496af9);
    } else {
        _0x4a5b85['appendChild'](_0x6badc);
    }
    _0x41c418['render'](_0xe52f5e['jsx'](CollectionStarSection, {
        'theme': _0x52ca97,
        'averageRating': _0x3fa6f0,
        'reviewAmount': _0x2b01ce
    }), _0x6badc);
};
const getStoreProductsMap = async (_0x222021, _0x562e61) => {
    const _0x4b9421 = new Map();
    _0x222021['forEach'](_0x285c74 => {
        _0x4b9421['set'](_0x285c74['handle'], _0x285c74['id']);
    });
    return _0x4b9421;
};
const insertProductsStatistics = async (_0x449339, _0x5119d8, _0xfcbbb4, _0x5e5582, _0x3fe2c4) => {
    const _0x270e6d = new Map();
    _0x449339['forEach'](_0x317afd => {
        _0x270e6d['set'](_0x317afd['productId'], _0x317afd);
    });
    await Promise['all'](_0x5119d8['map'](async _0x1d2408 => {
        var _0x170d84, _0x2799c7, _0x4ee671;
        const _0x4130d5 = decodeURIComponent(_0x1d2408['getAttribute']('href') ?? '');
        const _0x5e2662 = (_0x2799c7 = (_0x170d84 = _0x4130d5['split']('/products/')) == null ? void 0x0 : _0x170d84[0x1]) == null ? void 0x0 : _0x2799c7['split']('?')[0x0];
        if (!_0x5e2662)
            return;
        const _0x40efcb = _0xfcbbb4['get'](_0x5e2662);
        const _0x1905e0 = _0x40efcb ? _0x270e6d['get'](String(_0x40efcb)) : null;
        const _0x176728 = (_0x4ee671 = _0x1d2408['parentElement']) == null ? void 0x0 : _0x4ee671['querySelector']('.collection-star-section[data-product-id=\x22' + _0x40efcb + '\x22]');
        if (_0x176728)
            return;
        if (_0x1905e0) {
            insertProductStatistics(_0x1905e0, _0x1d2408, _0x5e5582, String(_0x40efcb), _0x3fe2c4);
            return await Promise['resolve']();
        }
    }));
    fixSliderOverflow();
};
const getProductCards = _0x48da05 => {
    let _0x154a12 = [];
    const _0x26f006 = '.shopify-section[id*=\x22recently-viewed-products\x22]';
    const _0x3e7d28 = '.shopify-section[id*=\x22recommendations\x22]';
    const _0x50d525 = '.shopify-section[id*=\x22promotions\x22]';
    const _0x51aa7b = [
        _0x26f006,
        _0x3e7d28,
        _0x50d525
    ];
    const _0x11e4c9 = [
        'a[href*=\x22/products/\x22][class*=\x22title\x22]',
        '[class*=\x22title\x22]\x20a[href*=\x22/products/\x22]',
        'a[href*=\x22/products/\x22][id*=\x22CardLink\x22]',
        'a[href*=\x22/products/\x22][class*=\x22product-link\x22]',
        'a[href*=\x22/products/\x22][class*=\x22link\x22]'
    ];
    let _0x3e5f50 = _0x11e4c9;
    if (_0x48da05) {
        let _0x11bff9;
        for (const _0x567605 of _0x11e4c9) {
            const _0x1e6123 = document['querySelector'](_0x567605);
            if (_0x1e6123) {
                _0x11bff9 = _0x567605;
                break;
            }
        }
        if (!_0x11bff9)
            return [];
        _0x3e5f50 = _0x51aa7b['map'](_0x451910 => _0x451910 + '\x20' + _0x11bff9);
    }
    for (const _0x49bce9 of _0x3e5f50) {
        _0x154a12 = document['querySelectorAll'](_0x49bce9);
        if (_0x154a12['length']) {
            break;
        }
    }
    console['log']({ 'nodeList': _0x154a12 });
    return Array['from'](_0x154a12)['filter'](_0x549997 => _0x549997 instanceof HTMLElement);
};
const getProductHandles = _0x43e173 => {
    const _0x5693f6 = new Set();
    _0x43e173['forEach'](_0x4326d6 => {
        var _0x41eb4d, _0x3ac43e;
        const _0x127412 = decodeURIComponent(_0x4326d6['getAttribute']('href') ?? '');
        const _0x481df7 = (_0x3ac43e = (_0x41eb4d = _0x127412['split']('/products/')) == null ? void 0x0 : _0x41eb4d[0x1]) == null ? void 0x0 : _0x3ac43e['split']('?')[0x0];
        if (!_0x481df7)
            return;
        _0x5693f6['add'](_0x481df7);
    });
    return _0x5693f6;
};
const getFilteredProducts = (_0x17260e, _0x44dcbb) => {
    const _0x295a49 = [];
    for (const _0x43a31e of _0x44dcbb) {
        if (_0x17260e['has'](_0x43a31e['handle'])) {
            _0x295a49['push'](_0x43a31e);
        }
    }
    return _0x295a49;
};
const getProductIds = _0x3ea091 => {
    return _0x3ea091['map'](_0x34465b => _0x34465b['id']);
};
const getProductsStatistics = (_0x224326, _0x5b2a4f) => {
    const _0x1c5df8 = new _0x787444(_0x224326[0x0], _0x5b2a4f, _0x4b518c);
    return _0x1c5df8['getCollectionStatistics'](_0x224326);
};
const fixSliderOverflow = () => {
    const _0x53c36e = [];
    const _0x395c66 = [
        '.flickity-viewport:has(.collection-star-section)',
        '.product-list:has(.collection-star-section)'
    ];
    for (const _0x1eccfb of _0x395c66) {
        const _0x2bda74 = document['querySelectorAll'](_0x1eccfb);
        _0x53c36e['push'](..._0x2bda74);
    }
    if (!_0x53c36e['length'])
        return;
    _0x53c36e['forEach'](_0x2d0536 => {
        const _0x4d9b93 = _0x2d0536['querySelector']('.flickity-slider\x20>\x20div');
        if (!_0x4d9b93)
            return;
        const _0x466658 = _0x4d9b93['offsetHeight'];
        const _0x528f8a = _0x2d0536['offsetHeight'];
        if (_0x466658 > _0x528f8a) {
            _0x2d0536['style']['height'] = _0x466658 + 'px';
        }
    });
};
const getStatisticsAndMap = async (_0x2b49dd, _0x54ba4f) => {
    const _0x1e667d = getProductHandles(_0x2b49dd);
    const _0x516057 = await getStoreProducts(_0x54ba4f);
    const _0x3726f7 = getFilteredProducts(_0x1e667d, _0x516057);
    const _0x48b1e6 = getProductIds(_0x3726f7);
    const _0x368f36 = await getStoreProductsMap(_0x3726f7);
    const _0x3c42a0 = await getProductsStatistics(_0x48b1e6, _0x54ba4f);
    return {
        'statistics': _0x3c42a0,
        'productMap': _0x368f36
    };
};
function useCollectionStarSection(_0x481c5c, _0x20f1c2, _0x44043e = ![], _0x2d8127 = !![]) {
    const [_0x5ee820, _0x25cba1] = _0x42469f['useState']();
    const [_0x327a60, _0x1a3ae0] = _0x42469f['useState']();
    const [_0x1d0e4f, _0x17869f] = _0x42469f['useState'](![]);
    const {theme: _0x5e1b47} = _0x42469f['useContext'](_0x2e4cba);
    const _0x478d37 = getProductCards(_0x481c5c);
    _0x42469f['useEffect'](() => {
        if (!_0x2d8127 || !_0x478d37['length'] || (_0x5ee820 == null ? void 0x0 : _0x5ee820['length']))
            return;
        getStatisticsAndMap(_0x478d37, _0x20f1c2)['then'](_0x148b9e => {
            const {
                statistics: _0xb83bb4,
                productMap: _0x104f80
            } = _0x148b9e;
            _0x25cba1(_0xb83bb4);
            _0x1a3ae0(_0x104f80);
        });
    }, [
        _0x478d37,
        _0x2d8127
    ]);
    _0x42469f['useEffect'](() => {
        if (_0x2d8127 && _0x5e1b47 && _0x5ee820 && _0x327a60 && !_0x1d0e4f) {
            insertProductsStatistics(_0x5ee820, _0x478d37, _0x327a60, _0x5e1b47, _0x44043e);
            _0x17869f(!![]);
        }
    }, [
        _0x5e1b47,
        _0x5ee820,
        _0x327a60,
        _0x2d8127
    ]);
    return;
}
const findFirstElementInDOM = _0x1aaa09 => {
    return _0x1aaa09['filter'](_0x27b258 => _0x27b258 !== null)['sort']((_0x402c38, _0x11e672) => {
        if (!_0x402c38 || !_0x11e672)
            return 0x0;
        return _0x402c38['compareDocumentPosition'](_0x11e672) & Node['DOCUMENT_POSITION_FOLLOWING'] ? -0x1 : 0x1;
    })[0x0];
};
const insertReviewSection = _0x13a000 => {
    var _0x3a6cb1, _0x4b86d0;
    const _0x58842b = document['getElementById']('bk-review-section');
    if (_0x58842b) {
        return;
    }
    let _0x255ab1;
    const _0x158475 = document['querySelectorAll']('.shopify-section[id*=\x22template\x22]');
    for (const _0x54a209 of _0x158475) {
        if (_0x54a209['querySelector']('h1') || _0x54a209['querySelector']('h2')) {
            _0x255ab1 = _0x54a209;
            break;
        }
    }
    const _0x521b5b = document['querySelector']('main') ?? document['querySelector']('body') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]');
    const _0xdeb5a0 = _0x255ab1 ? _0x255ab1['parentNode'] : _0x521b5b;
    const _0x267b35 = document['createElement']('div');
    _0x267b35['classList']['add']('bk-reviews', _0x13a000);
    _0x267b35['style']['width'] = '100%';
    _0x267b35['style']['height'] = 'fit-content';
    const _0x1a2fba = document['querySelector']('.container--flush');
    const _0xce7275 = document['querySelector']('.shopify-section[id*=\x22recently-viewed-products\x22]');
    const _0x221a88 = document['querySelector']('.shopify-section[id*=\x22recommendations\x22]');
    const _0xe74a42 = document['querySelector']('.shopify-section[id*=\x22promotions\x22]');
    const _0x4b464b = document['querySelector']('.shopify-section[id*=\x22product-content\x22]');
    const _0x936d59 = document['querySelector']('.shopify-section[id*=\x22information-tabs\x22]');
    const _0x1ebd40 = [
        _0xce7275,
        _0x221a88,
        _0xe74a42
    ];
    const _0x1ca121 = findFirstElementInDOM(_0x1ebd40);
    const _0x1b3865 = _0x1ca121 == null ? void 0x0 : _0x1ca121['parentNode'];
    if (_0x1ca121 && _0x1b3865) {
        console['log']('insertBeforeSection', _0x1ca121);
        _0x1b3865['insertBefore'](_0x267b35, _0x1ca121);
    } else if (_0x4b464b && _0x4b464b['nextElementSibling']) {
        console['log']('productSection', _0x4b464b);
        (_0x3a6cb1 = _0x4b464b['parentNode']) == null ? void 0x0 : _0x3a6cb1['insertBefore'](_0x267b35, _0x4b464b['nextElementSibling']);
    } else if (_0x936d59 && _0x936d59['nextElementSibling']) {
        console['log']('informationTabsSection', _0x936d59);
        (_0x4b86d0 = _0x936d59['parentNode']) == null ? void 0x0 : _0x4b86d0['insertBefore'](_0x267b35, _0x936d59['nextElementSibling']);
    } else if (_0x1a2fba && _0x1a2fba['parentNode'] && _0x1a2fba['nextElementSibling']) {
        console['log']('containerFlush', _0x1a2fba);
        _0x1a2fba['parentNode']['insertBefore'](_0x267b35, _0x1a2fba['nextElementSibling']);
    } else if (_0x255ab1) {
        if (_0x255ab1['nextElementSibling']) {
            console['log']('after\x20targetSection');
            _0xdeb5a0 == null ? void 0x0 : _0xdeb5a0['insertBefore'](_0x267b35, _0x255ab1['nextElementSibling']);
        } else {
            console['log']('child\x20of\x20targetSectionParent');
            _0xdeb5a0 == null ? void 0x0 : _0xdeb5a0['appendChild'](_0x267b35);
        }
    } else if (_0x521b5b) {
        console['log']('child\x20of\x20mainSection');
        _0x521b5b['appendChild'](_0x267b35);
    } else {
        console['log']('no\x20section\x20found');
    }
    _0x41c418['render'](_0xe52f5e['jsx'](_0x271ba7, {
        'theme': _0x13a000,
        'extension': 'review-section'
    }), _0x267b35);
};
const insertStarSection = _0x351f86 => {
    const _0x2ce791 = document['getElementById']('bk-star-section');
    if (_0x2ce791) {
        console['log']('returned\x20because\x20already\x20star\x20section');
        return;
    }
    const _0xe3fec = document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]');
    const _0x309ac3 = [(_0xe3fec == null ? void 0x0 : _0xe3fec['querySelector']('h1')) ?? document['querySelector']('h1') ?? (_0xe3fec == null ? void 0x0 : _0xe3fec['querySelector']('h2')) ?? document['querySelector']('h2')];
    const _0x149471 = document['querySelectorAll']('.small--hide\x20h1,\x20.small--hide\x20h2');
    _0x149471['forEach'](_0x42be6e => {
        _0x309ac3['push'](_0x42be6e);
    });
    _0x309ac3['forEach'](_0x3951ae => {
        const _0x3e6670 = _0x3951ae == null ? void 0x0 : _0x3951ae['parentElement'];
        const _0x5ef0a4 = document['createElement']('div');
        _0x5ef0a4['classList']['add']('bk-reviews', _0x351f86);
        if (_0x3951ae && _0x3e6670) {
            _0x3951ae['style']['marginBottom'] = '0';
            _0x3e6670['insertBefore'](_0x5ef0a4, _0x3951ae['nextSibling']);
            _0x41c418['render'](_0xe52f5e['jsx'](_0x271ba7, {
                'theme': _0x351f86,
                'extension': 'star-section'
            }), _0x5ef0a4);
        }
    });
};
var e = Object['defineProperty'];
var r = function (_0x56a5df, _0x3ebd3a) {
    return e(_0x56a5df, 'name', {
        'value': _0x3ebd3a,
        'configurable': !![]
    });
};
var n = r(function (_0x4fd03b) {
    _0x42469f['useEffect'](function () {
        var _0x5b0d4f = document['head']['querySelectorAll']('style');
        var _0x316026 = !![], _0x2e2a95 = ![], _0x3fdda0 = void 0x0;
        try {
            for (var _0x3a2c10 = _0x5b0d4f[Symbol['iterator']](), _0x52e0ce; !(_0x316026 = (_0x52e0ce = _0x3a2c10['next']())['done']); _0x316026 = !![]) {
                var _0x3e92ec = _0x52e0ce['value'];
                if (_0x3e92ec['innerHTML'] === _0x4fd03b)
                    return;
            }
        } catch (_0x422829) {
            _0x2e2a95 = !![];
            _0x3fdda0 = _0x422829;
        } finally {
            try {
                if (!_0x316026 && _0x3a2c10['return'] != null) {
                    _0x3a2c10['return']();
                }
            } finally {
                if (_0x2e2a95) {
                    throw _0x3fdda0;
                }
            }
        }
        var _0x45609f = document['createElement']('style');
        _0x45609f['innerHTML'] = _0x4fd03b, document['head']['appendChild'](_0x45609f);
    }, [_0x4fd03b]);
}, 'useStyleInjection');
const injectThemePreferencesStyle = _0x5afe58 => {
    if (!_0x5afe58)
        return;
    const _0x4bcbdf = '.bk-reviews\x20>\x20*\x20{' + Object['entries'](_0x5afe58)['filter'](([_0x2d2c93]) => _0x2d2c93['includes']('Color'))['map'](([_0x4ff77d, _0x15b745]) => _0x15b745 && '--twc-' + _0x4ff77d['split']('Color')[0x0] + ':\x20' + _0x3b9fa1(_0x15b745)['slice'](0x4, -0x1)['replaceAll'](',', ''))['join'](';\x20') + ';}';
    n(_0x4bcbdf);
};
function App() {
    const _0x933e50 = _0x3db633();
    const _0x2ff6a4 = _0x57df1c();
    const _0x5ae06a = _0xde8ca9();
    const {reviewStatistics: _0x4339ff} = _0x42469f['useContext'](_0x3b308b);
    const {
        theme: _0x691bc2,
        setTheme: _0x240148,
        themePreferences: _0x526d30,
        setThemePreferences: _0x19a8a4
    } = _0x42469f['useContext'](_0x2e4cba);
    _0x482ced();
    injectThemePreferencesStyle(_0x526d30);
    if (!_0x2ff6a4)
        return null;
    let _0x3c7ceb = ![];
    let _0x6211c4 = ![];
    let _0x3ca8f9 = !![];
    if (_0x526d30 == null ? void 0x0 : _0x526d30['primaryColor']) {
        _0x3c7ceb = !(_0x4339ff == null ? void 0x0 : _0x4339ff['reviewAmount']) && (_0x526d30 == null ? void 0x0 : _0x526d30['starsWithoutReviews']) === ![];
        _0x6211c4 = (_0x526d30 == null ? void 0x0 : _0x526d30['starsWithoutReviews']) === ![];
        _0x3ca8f9 = (_0x526d30 == null ? void 0x0 : _0x526d30['starsInBox']) === ![];
    }
    useCollectionStarSection(Boolean(_0x5ae06a), _0x2ff6a4, _0x6211c4, !_0x3ca8f9);
    _0x42469f['useEffect'](() => {
        _0x933e50['getStorePreferences']()['then'](_0x1b67b2 => {
            const {
                theme: _0x370649,
                theme_preferences: _0x12d665
            } = _0x1b67b2;
            _0x240148(_0x370649);
            if (!_0x12d665 || !_0x19a8a4)
                return;
            _0x19a8a4(_0x12d665);
        })['catch'](() => {
            _0x240148('default');
        });
    }, []);
    _0x42469f['useEffect'](() => {
        var _0x343d8d;
        if (_0x2ff6a4 && _0x5ae06a && _0x691bc2 && _0x4339ff) {
            (_0x343d8d = document['querySelector']('#bk-reviews-root')) == null ? void 0x0 : _0x343d8d['setAttribute']('data-theme', _0x691bc2);
            if (!_0x3c7ceb) {
                insertStarSection(_0x691bc2);
                insertReviewSection(_0x691bc2);
            }
        }
    }, [
        _0x691bc2,
        _0x4339ff,
        _0x2ff6a4,
        _0x5ae06a,
        _0x3c7ceb
    ]);
    const _0x5f3b8c = ![];
    return _0x5f3b8c && _0x691bc2 !== void 0x0 ? _0xe52f5e['jsxs'](_0xe52f5e['Fragment'], {
        'children': [
            _0xe52f5e['jsx'](_0x271ba7, {
                'theme': _0x691bc2,
                'extension': 'star-section'
            }),
            _0xe52f5e['jsx'](_0x271ba7, {
                'theme': _0x691bc2,
                'extension': 'review-section'
            })
        ]
    }) : null;
}
_0x224eb1['createRoot'](document['getElementById']('bk-reviews-root'))['render'](_0xe52f5e['jsx'](_0x2a17fb['StrictMode'], {
    'children': _0xe52f5e['jsx'](_0x28f8b7, {
        'i18n': _0x5d3dc1,
        'children': _0xe52f5e['jsx'](_0x5220a9, { 'children': _0xe52f5e['jsx'](_0x4d1461, { 'children': _0xe52f5e['jsx'](_0x3315d0, { 'children': _0xe52f5e['jsx'](App, {}) }) }) })
    })
}));