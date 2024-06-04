$(document).ready( function() {

    $("#contectForm").submit(function(event) {
        event.preventDefault();

        let errormap = new Map();
        let errorsCount = 0;

        // reseting errors
        $("#first-name-field").removeClass("field-i-danger");
        $("#first-name-field-error").removeClass("field-error-danger");
        $("#last-name-field").removeClass("field-i-danger");
        $("#last-name-field-error").removeClass("field-error-danger");
        $("#email-address-field").removeClass("field-i-danger");
        $("#email-address-field-error").removeClass("field-error-danger");
        $("#QueryType-radioOptions-error").removeClass("field-error-danger");
        $("#Message-field").removeClass("field-i-danger");
        $("#Message-field-error").removeClass("field-error-danger");
        $("#consent-checkbox-error").removeClass("field-error-danger");


        // first name validation and throw error
        if ( $("#first-name-field").val() === "")
        {
            errormap.set("first name", {
                inpid: "#first-name-field", for: "first name", errormsg: "first name is required"
            });
            $("#first-name-field").addClass("field-i-danger");
            $("#first-name-field-error").addClass("field-error-danger");
            $("#first-name-field-error").html("This field is required");

            errorsCount++;
        }

        // last name validation and throw error
        if ( $("#last-name-field").val() === "")
        {
            errormap.set("last name", {
                inpid: "#last-name-field", for: "last name", errormsg: "last name is required"
            });
            $("#last-name-field").addClass("field-i-danger");
            $("#last-name-field-error").addClass("field-error-danger");
            $("#last-name-field-error").html("This field is required");

            errorsCount++;
        }

        // Email Address validation and throw error
        if ($("#email-address-field").val() === "")
        {
            errormap.set("email address", {
                inpid: "#email-address-field", for: "email address", errormsg: "email address is required"
            });
            $("#email-address-field").addClass("field-i-danger");

            $("#email-address-field-error").addClass("field-error-danger");
            $("#email-address-field-error").html("This field is required");
            errorsCount++;
        } else if ( Valid_Email( $("#email-address-field")[0] ) == false) {
            errormap.set("email address", {
                inpid: "#email-address-field", for: "email address", errormsg: "please enter a valid email address"
            });
            $("#email-address-field").addClass("field-i-danger");

            $("#email-address-field-error").addClass("field-error-danger");
            $("#email-address-field-error").html("Please enter a valid email address");
            errorsCount++;
        }

        // Query Type validation and throw error
        if ( $("#QueryType-radioOptions input:checked").length == 0 )
        {   
            errormap.set("query type", {
                inpid: "#QueryType-radiogroup", for: "query type", errormsg: "Please select a query type"
            });

            $("#QueryType-radioOptions-error").addClass("field-error-danger");
            $("#QueryType-radioOptions-error").html("Please select a query type");
        }

        // Message validation and throw error
        if ( $("#Message-field").val() === "")
        {
            errormap.set("Message field", {
                inpid: "#Message-field", for: "Message field", errormsg: "message is required"
            });
            $("#Message-field").addClass("field-i-danger");

            $("#Message-field-error").addClass("field-error-danger");
            $("#Message-field-error").html("This field is required");

            errorsCount++;
        }
        
        // Consent validation and throw error
        if ( $("#consent-checkbox:checked").length == 0 )
        {
            errormap.set("consent checkbox", {
                inpid: "#consent-checkbox", for: "consent checkbox", errormsg: "consent is required"
            });

            $("#consent-checkbox-error").addClass("field-error-danger");
            $("#consent-checkbox-error").html("To submit this form, please consent to being contacted");
            errorsCount++;
        }

        // Throwing errors for screen readers
        if (errorsCount > 0)
        {


            let errorstring = "";
            errormap.forEach(function(value, key, map) {
                errorstring += `<li><a href="${value.inpid}" data-srfocus="${value.inpid}">${value.errormsg}</a></li>`
            });

            $("#error-list").html(`
                <h2>please fix errors</h2>
                <ul id="error-message-list">
                ${errorstring}
                </ul>
            `);
    
            $("#error-list").focus();
        }
        else
        {
            $("#succes-msg").show();
            $("#succes-msg").focus();
        }


    });
    function Valid_Email(input) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.value.match(validRegex)) {
            return true;
        } else {
            return false;
        }
    }
});








