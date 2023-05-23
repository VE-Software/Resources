class Help {
    constructor(_input) {
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
        "<li>The Dashboard page provides a file explorer tree - your building data can either be stored locally or in the BimUtopia cloud.  </li>",
        "<li>The Plugin Pages (between \"Dashboard\" and the Toolbox on the navigation bar) is organized as follows:</li>",
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
        "<li class = \"subli\">a file from \"My Projects\" which are company projects stored on the cloud.</li>",
        "<li class = \"subli\">or a local file</li > "];

    this.getStarted.show = false;

    this.getStarted.label = "...Get Started";

    this.createAProject = ["<li>Administrators can create new projects by selecting the \"Make New Project\" button.</li>",
        "<li>The \"Make New Project\" button only exists for Administrators</li>"];

    this.createAProject.show = false;

    this.createAProject.label = "...Create a New Project Directory...";

    this.startABuildingInAnExistingProject = ["<li>To start a new building project in an existing project directory, first upload the project architectural file by drag-and-dropping it into the project\'s \"Revit Files\\Incoming Files\" directory.</li>",
        "<li>It can take a little while for the file to sync up into the cloud.  Once the file is there, clicking on it will open the \"File Controls\" dialog.</li>",
        "<li>Select \"Convert From Revit\".</li>",
        "<li>The file will be sent to Forge for conversion to a *.json file that will show up in the \"Engineering Files\\Working\" directory.  This will take a while - do something else for now.</li>",
        "<li>If you would like a set of the drawings that are currently set up in the Revit File, click on the file, and select \"Request AutoCAD Files\".</li>",
        "<li>The file will be sent to Forge for *.dwg creation, which will eventually show up in the \"Engineering Files\\Working\" directory as a zip file.  This will take a while - do something else for now.</li>",    ];

    this.startABuildingInAnExistingProject.show = false;

    this.startABuildingInAnExistingProject.label = "...Create a New Project Directory...";

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

    this.startWorkingWithAFile = ["<li>Using the Dashboard file explorer tree, select a *.bld or *.json file from \"My Projects\" or from your local machine.</li>",
        "<li>The \"File Controls\" dialog box will pop up:  Select \"Open Building File\"</li>",
        "<li>The file will load; once loaded, the Level Selector will be updated, and a plan drawing of the bottom level should appear.</li>",
        "<li>Note that the bottom level may not contain anything - so if nothing appears first select a level that is actually inside the building.</li>"
    ];

    this.startWorkingWithAFile.show = false;

    this.startWorkingWithAFile.label = "...Start Working With A File";

    this.modelTalk = ["<li>The browser hosts your model.  When you load a building from the cloud or your local machine, the browser holds it as the model.</li>",
        "<li>When you open a page (the Dashboard or one of the Plugins), that page makes a copy of the model as its version of the building.  Thus each page you have open has its own copy of the building data.</li>",
        "<li>If you want the data on a page to be saved to the cloud or to be passed to other pages, you must click the \"Save To Model\" icon - which updates the model from the page.</li>",
        "<li>If you want to update the page to reflect an updated model, you must click the \"Update From Model\" icon.</li>",
        "<li>Normally you should expect to work on the building in \"Assemble Building\" and to do the analysis in \"Engineering\", updating the model from \"Assemble Building\" as you work.</li>"
    ];

    this.modelTalk.show = false;

    this.modelTalk.label = "...About the Model and the Building";

    this.startAssemblingAStructure = ["<li>Open your *.bld file.  Click on the Plugins button on the Navigation Bar, and select \"Assemble Building\".</li>",
        "<li>The \"Assemble Building\" plugin provides editing functionality not available on the Viewer, while providing the same basic layout and information access.</li>",
        "<li>Load basic structural families that you intend to use, by clicking on the Toolbox (on the Navigation Bar) and selecting \"Building Editing\", then \"Families\", and then \"Select Prototype Structural Families To Add\".</li>",
        "<li>The Viewer page can be opened by clicking on the project name in the navigation bar (top of page).</li>",
        "<li>The Viewer page contains a plan viewer and a dialog box - information on these is in the \"Give Me An Overview\" section.</li>"
    ];

    this.modelTalk = ["<li>The Engineering Plugin does lateral analysis and design for seismic loads. </li>",
        "<li>The \"Settings\" tab on the dialog box on the left of the screen contains analysis settings and loading information.</li>",
        "<li>If the building analysis runs, the \"Calculations\" tab will populate with the generated calculations.</li>",
        "<li>Calculations can be printed from the \"Toolbox/Print/Print Calculations\" dialog box.  It takes a little while for the print preview menu to load, depending on the size of the calculations file. .</li>",
        "<li>Check the \"Log\" tab if the calculations fail to run - there may be settings that need to be changed (typically this would be lack of ground acceleration values, or vertical extents of building that exceed the vertical extent of load-resisting elements. </li>"
    ];

    this.modelTalk.show = false;

    this.modelTalk.label = "...About the Engineering";

    this.startWorkingWithAFile.show = false;

    this.startWorkingWithAFile.label = "...Start Working With A File";

    this.startWorkingWithAFile.show = false;

    this.startWorkingWithAFile.label = "...Start Working With A File";

    this.content = [this.getOverview, this.getStarted, this.createAProject, this.startABuildingInAnExistingProject, this.startWorkingWithAFile, , this.modelTalk]
}
}
