var icecream = require('../models/icecreamSchema');

// List of all Icecream
exports.icecream_list = async function (req, res) {
    try {
        theIcecreams = await icecream.find();
        res.send(theIcecreams);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Icecream.
exports.icecream_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await icecream.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Icecream create on POST.
exports.icecream_create_post = async function (req, res) {
    console.log(req.body)
    let document = new icecream();
    document.icecream_flavour = req.body.icecream_flavour;
    document.icecream_quantity = req.body.icecream_quantity;
    document.icecream_cost = req.body.icecream_cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Icecream delete form on DELETE.
exports.icecream_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await icecream.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Icecream update form on PUT.
exports.icecream_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await icecream.findById(req.params.id)
        // Do updates of properties
        if (req.body.icecream_flavour)
            toUpdate.icecream_flavour = req.body.icecream_flavour;
        if (req.body.icecream_quantity) toUpdate.cost = req.body.icecream_quantity;
        if (req.body.size) toUpdate.icecream_cost = req.body.icecream_cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// VIEWS
// Handle a show all view
exports.icecream_view_all_Page = async function (req, res) {
    try {
        theIcecreams = await icecream.find();
        res.render('icecreams', { title: 'Icecream Search Results', results: theIcecreams });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.icecream_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await icecream.findById(req.query.id)
        res.render('icecreamdetail',
            { title: 'Icecream Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.icecream_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('icecreamCreate', { title: 'Icecream Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a icecream.
// query provides the id
exports.icecream_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await icecream.findById(req.query.id)
        res.render('icecreamUpdate', { title: 'Icecream Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.icecream_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await icecream.findById(req.query.id)
        res.render('icecreamDelete', {
            title: 'Icecream Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};