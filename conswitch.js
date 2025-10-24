let testType="regression"
switch (testType) {
    case "smoke":
        console.log("Running smoke tests")
        break;
        case "sanity":
            console.log(("Running sanity tests"))
         break;
         case "regression":
            console.log("Running regression tests")
break;
    default:
        console.log("Running Default tests")
        break;
}