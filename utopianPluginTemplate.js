window.addEventListener("load", initialize.page, false);

plugin.sidebar.controlTabs = [
    {
        name: "BUILDING",
        action: function (_table) {
            $P.sidebar.utilities.populateTable(_table, "building");
        }
    },
    {
        name: "ELEMENT",
        action: function (_table) {
            $P.sidebar.utilities.populateTable(_table, "element");
        }
    },
    {
        name: "FAMILY",
        action: function (_table) {
            $P.sidebar.utilities.populateTable(_table, "family");
        }
    }
];

onstart = function () {
    initialize.finally = function () {

        var _wallType = new elements.WallType({
            name: "6-in ICF / Concrete",
            guid: "ae932cc4-9f6c-4610-e7a5c4f73072",
            layers: [
                {
                    material: "Gypsum Wallboard",
                    thickness: 0.5
                },
                {
                    material: "Polystyrene Rigid Insulation",
                    thickness: 2.625
                },
                {
                    material: "Boundary",
                    thickness: 0
                },
                {
                    material: "Concrete",
                    thickness: 6
                },
                {
                    material: "Boundary",
                    thickness: 0
                },
                {
                    material: "Polystyrene Rigid Insulation",
                    thickness: 2.625
                },
                {
                    material: "Gypsum Wallboard",
                    thickness: 0.5
                }
            ],
            color: "green",
            material: "concrete",
            aci: {
                concrete: { fc: 4000, lambda: 1 },
                reinforcement: {
                    vertical: { size: 5 },
                    horizontal: { size: 5 },
                    chord: { confinement: { size: 3 }, vertical: { size: 6 } }
                }
            }
        })

        if (!$B.typesDictionary["ae932cc4-9f6c-4610-e7a5c4f73072"]) {
            $B.wallTypes.push(_wallType);
            _wallType.installInBuilding($B);
        }

        plugin.intentionalActs.convert = function (_element) {
            $SE.forEach(function (_element) {
                if (_element.elementType == "revitWall") {
                    var _oldType = _element.type;
                    $B.revitWalls.forEach(function (_wall) {
                        if (_wall.type == _oldType) {
                            _wall.typeGUID = "ae932cc4-9f6c-4610-e7a5c4f73072";
                            _wall.type = $B.typesDictionary["ae932cc4-9f6c-4610-e7a5c4f73072"];
                            _wall.onchange();
                        }
                    })
                }
            })
            $I.finish();
        }

        $SE.discernIntent = function () {
            if ($SE.length > 0) {
                $SE.doThis = $I.convert;
                return "Right click to convert walls of this type to 6-inch ICF";
            }
        }

        plugin.finally();

        $P.sidebar.utilities.populateTable($P.sidebar.tables.display, "building");
    }

    model.ThisProjectName = sessionStorage.getItem("projectName");

    plugin.layers[2].select = true;

    plugin.selectedNavbarItem.selectedItem = "pluginButton";
    plugin.actions.throwFlag = function (_note) {
        if (document.getElementById("clickMe")) {
            document.getElementById("clickMe").value = _note;
        }
    }
    plugin.pluginselectionAction = function () {
        document.getElementById("sidebarButton").innerHTML = $SE.discernIntent();
    };
    plugin.initializeSidebarData = function () {
        plugin.sidebarData = {
            action: $SE.doThis,
            selectionArray: $B.levels,
            selectionArrayClassName: "selectLevel",
            selectionArrayLabelClass: "selectLabel",
            selectionArrayObject: user,
            selectionArrayParameter: "thisLevel"
        }
    }

    if (document.addEventListener) {
        document.addEventListener('contextmenu', function (e) {
            $SE.doThis();
            e.preventDefault();
        }, false);
    }
    else {
        document.attachEvent('oncontextmenu', function () {
            window.event.returnValue = false;
        });
    }
}

var active_plugin = {
    name: "NRMCA IFC Plugin",
    jsurl: "https://combinatronics.com/VE-Software/Resources/main/nrmca_plugin.js",
    families: {
        walls: [
            new elements.WallType({
                name: "6-in ICF / Concrete",
                guid: "ae932cc4-9f6c-4610-e7a5c4f73072",
                layers: [
                    {
                        material: "Gypsum Wallboard",
                        thickness: 0.5
                    },
                    {
                        material: "Polystyrene Rigid Insulation",
                        thickness: 2.625
                    },
                    {
                        material: "Boundary",
                        thickness: 0
                    },
                    {
                        material: "Concrete",
                        thickness: 6
                    },
                    {
                        material: "Boundary",
                        thickness: 0
                    },
                    {
                        material: "Polystyrene Rigid Insulation",
                        thickness: 2.625
                    },
                    {
                        material: "Gypsum Wallboard",
                        thickness: 0.5
                    }
                ],
                color: "green",
                material: "concrete",
                aci: {
                    concrete: { fc: 4000, lambda: 1 },
                    reinforcement: {
                        vertical: { size: 5 },
                        horizontal: { size: 5 },
                        chord: { confinement: { size: 3 }, vertical: { size: 6 } }
                    }
                }
            }),
            new elements.WallType({
                name: "8-in ICF / Concrete",
                guid: "ae932cc4-9f6c-4610-e7a5c4f73073",
                layers: [
                    {
                        material: "Gypsum Wallboard",
                        thickness: 0.5
                    },
                    {
                        material: "Polystyrene Rigid Insulation",
                        thickness: 2.625
                    },
                    {
                        material: "Boundary",
                        thickness: 0
                    },
                    {
                        material: "Concrete",
                        thickness: 8
                    },
                    {
                        material: "Boundary",
                        thickness: 0
                    },
                    {
                        material: "Polystyrene Rigid Insulation",
                        thickness: 2.625
                    },
                    {
                        material: "Gypsum Wallboard",
                        thickness: 0.5
                    }
                ],
                color: "green",
                material: "concrete",
                aci: {
                    concrete: { fc: 4000, lambda: 1 },
                    reinforcement: {
                        vertical: { size: 5 },
                        horizontal: { size: 5 },
                        chord: { confinement: { size: 3 }, vertical: { size: 6 } }
                    }
                }
            }),
        ]
    },
    entities: {
        walls: []
    },

    toJSON = function () {
        var _out = {
            name: "NRMCA IFC Plugin",
            jsurl: "https://combinatronics.com/VE-Software/Resources/main/nrmca_plugin.js",
            families: {
                walls: []
            },
            entities: {
                walls: []
            }
        }
        for (let i = 0; i < this.families.walls.length; i++) {
            _out.families.walls.push(this.families.walls[i].toJSON());
        }
        for (let i = 0; i < this.entities.walls.length; i++) {
            _out.entities.walls.push({
                guid: _out.entities.walls[i].guid,
                typeGUID: _out.entities.walls[i].typeGUID
            });
        }
        return _out;
    }

}