define(['ponyville/pony', 'ponyville/altPony'], function (Pony, AltPony) {

    suite('Mocked ponies 1', function () {

        test('this module has regular neigh', function () {
            assert.deepEqual(Pony.neigh(), ['ponyville utility pony', 'ponyville pony']);
        });

        test('foreign module has regular neigh', function () {
            assert.deepEqual(AltPony.neigh(), ['ponyville utility pony']);
        });
    });
});
