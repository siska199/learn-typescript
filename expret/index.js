function someFuntion(value) {
    var someOtherFunction = function (someArg) {
        var a = someArg;
    };
    return someOtherFunction;
}
var result = someFuntion('');
var reducer = {
    action: "ADD_TODO",
    payload: "name"
};
var initialForm = {
    name: "",
    fullname: "",
    password: ""
};
Object.keys(initialForm).map(function (key, i) {
    console.log(key);
    console.log(initialForm[key]);
});
