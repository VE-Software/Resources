

Help = function (_input) {
    var _self = this;
    this.show = false;
    this.getDisplayData = function () {
        var _output = [];

        _self.content.forEach(function (_item) {
            if (_item.show) {
                _output.push({
                    inputObject: _item,
                    output: _output,
                    parameter: "show",
                    label: _item.label + ":",
                    className: "property header tableSection",
                    type: "header"
                });
                _item.forEach(function (_line) {
                    _output.push({
                        content: _line,
                        className: "property header tableSection",
                        type: "readonly"
                    })
                });
            }
            else {
                _output.push({
                    inputObject: _item,
                    output: _output,
                    parameter: "show",
                    label: _item.label + "...",
                    className: "property header tableSection",
                    type: "header"
                });
            }
        })

        return _output;
    }

    this.logInToBim360 = ["<li>You must have a Bim360 account to log in to, and that account must have the BimUtopia App enabled.  If you do not have a Revit file in a Bim360 account BimUtopia will be unable to access it or use Autodesk Forge to process it.</li>",
        "<li>Click on \"Autodesk Files\" on the Dashboard explorer tree.  Autodesk's sign-in page should pop up - sign in with your Autodesk credentials.  Note that Bimutopia does not collect your credentials, it collects an access token from Autodesk so that Forge can process your files.</li>",
        "<li>Upon completion of the Autodesk sign in, the Dashboard explorer tree will repopulate, including all Bim360 accounts that you have access to that are BimUtopia enabled.</li>",
        "<li>Revit files are listed in the \"Plans\" branch of a Bim360 project;  *.bld files and AutoCAD zip files are listed on the \"Project Files\" branch.</li>",
        "<li>Note that the explorer tree branches can be collapsed or expanded by clicking on them.</li>"];

    this.logInToBim360.show = false;

    this.logInToBim360.label = "...Log in to Bim360";

    this.getOverview = ["<li>BimUtopia gives you access to your building\'s BIM data, to use and manipulate.</li>",
        "<li>The Dashboard page provides a file explorer tree - your building data can either be stored locally or in your Bim360 account.  You must have a BimUtopia-enabled Bim360 account in order to use Autodesk's Forge to convert Revit file data and write new Revit files.</li>",
        "<li>The Viewer Page (between \"Dashboard\" and the Toolbox on the navigation bar) is organized as follows:</li>",
        "<li class = \"subli\">a dialog box on the left with:</li>",
        "<li class = \"subsubli\">a level selector (operated as a drop-down menu or by mousewheel)</li>",
        "<li class = \"subsubli\">a display box with a set of options:</li>",
        "<li class = \"subsubsubli\">Controls: which allows you to choose element types that you can see and select on the plan viewer.</li>",
        "<li class = \"subsubsubli\">Building: which provides a listing of the building's parameters for viewing and editing.</li>",
        "<li class = \"subsubsubli\">Element: which provides a listing of the selected elements' parameters for viewing and editing.</li>",
        "<li class = \"subsubsubli\">Family: which provides a listing of the selected family's parameters for viewing and editing.</li>",
        "<li class = \"subli\">a plan viewer (drawing)</li>",
        "<li class = \"subsubsubli\">Selectable elements (as set on the Controls tab) will highlight as magenta when the mouse hovers over them. Clicking on a highlighted element will select/deselect it.</li>",
        "<li class = \"subsubsubli\">Selected elements will display as cyan. Selected elements can be deselected by clicking on them, or by using the \"escape\" key on your keyboard</li>",
        "<li>The Toolbox provides general tools (\"File\", \"Print\", \"Building Editing\"). \"Building Editing\" enables generic editing of building elements, families, levels and grids.</li>",
        "<li>Plugins enables specific sets of tools: \"Assemble Building\" is used to edit building models and to add structure to the model; \"Engineering\" is used to perform engineering design calculations</li>"
    ];

    this.getOverview.show = false;

    this.getOverview.label = "...Give Me An Overview";

    this.getStarted = ["<li>Use the Dashboard to load a file from the file explorer tree, such as:</li>",
        "<li class = \"subli\">a \"Tester\" file</li>",
        "<li class = \"subli\">a file from your Bim360 account</li>",
        "<li class = \"subli\">or a local file</li > "];

    this.getStarted.show = false;

    this.getStarted.label = "...Get Started";

    this.lookAtARevitFile = ["<li>Log in to your Bim360 account through the file explorer tree on the Dashboard.</li>",
        "<li>Select a Revit file from your project's \"Plans\" folder - the Bim360 controls dialog box should open.</li>",
        "<li>Select \"View 3D Model\".</li>",
        "<li>The viewer area should load Autodesk's viewer for the selected Revit model.</li>"];

    this.lookAtARevitFile.show = false;

    this.lookAtARevitFile.label = "...View A 3D Revit Model";

    this.loadAFileToWorkWith = ["<li>Select the source Revit file from your Bim360 account.  The \"Bim360 Controls\" dialog box will pop up.</li>",
        "<li>Click on \"Get *.bld From Forge\"</li>",
        "<li>The selected Revit file will be sent to Autodesk Forge for processing.  You will be notified when the bld file is ready.</li>",
        "<li>The bld file will show up in your Bim360 project files for the associated project.</li>"];

    this.loadAFileToWorkWith.show = false;

    this.loadAFileToWorkWith.label = "...Make A File To Work With";

    this.startWorkingWithAFile = ["<li>Using the Dashboard file explorer tree, select a bld file from \"Testers\", your Bim360 account \"Project Files\" or from your local machine.</li>",
        "<li>If your file if a \"Tester\" or in Bim360, the \"Bim360 Controls\" dialog box will pop up:  Select \"Load File\"</li>",
        "<li>The file will load; once loaded, the project name will appear to the left of the Toolbox icon.</li>",
        "<li>The Viewer page can be opened by clicking on the project name in the navigation bar (top of page).</li>",
        "<li>The Viewer page contains a plan viewer and a dialog box - information on these is in the \"Give Me An Overview\" section.</li>"
    ];

    this.startWorkingWithAFile.show = false;

    this.startWorkingWithAFile.label = "...Start Working With A File";

    this.startAssemblingAStructure = ["<li>Open your *.bld file.  Click on the Plugins button on the Navigation Bar, and select \"Assemble Building\".</li>",
        "<li>The \"Assemble Building\" plugin provides editing functionality not available on the Viewer, while providing the same basic layout and information access.</li>",
        "<li>Load basic structural families that you intend to use, by clicking on the Toolbox (on the Navigation Bar) and selecting \"Building Editing\", then \"Families\", and then \"Select Prototype Structural Families To Add\".</li>",
        "<li>The Viewer page can be opened by clicking on the project name in the navigation bar (top of page).</li>",
        "<li>The Viewer page contains a plan viewer and a dialog box - information on these is in the \"Give Me An Overview\" section.</li>"
    ];

    this.startWorkingWithAFile.show = false;

    this.startWorkingWithAFile.label = "...Start Working With A File";

    this.startWorkingWithAFile.show = false;

        this.startWorkingWithAFile.label = "...Load A File To Work With";

    this.content = [this.getOverview, this.getStarted, this.logInToBim360, this.lookAtARevitFile, this.loadAFileToWorkWith, this.startWorkingWithAFile]
}

var help = new Help();