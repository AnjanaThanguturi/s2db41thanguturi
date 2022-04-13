var icecream = require('../models/icecreamSchema');

// List of all Icecream
exports.icecream_list = async function (req, res) {
    // res.send('NOT IMPLEMENTED: Icecream list');
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
exports.icecream_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id);
};
// Handle Icecream create on POST.
exports.icecream_create_post = async function (req, res) {
    //res.send('NOT IMPLEMENTED: Icecream create POST');
    console.log(req.body)
    let document = new icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
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
exports.icecream_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Icecream delete DELETE ' + req.params.id);
};
// Handle Icecream update form on PUT.
exports.icecream_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Icecream update PUT' + req.params.id);
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