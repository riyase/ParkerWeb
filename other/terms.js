$(document).ready(function() {
    console.log("terms js loaded!");
    let display = getUrlParameter("display");
    console.log("display:" + display);
    switch(display) {
        case "privacy":
            displayPrivacy();
            break;
        case "terms":
            displayTerms();
            break;
        default:
            displayPOS();
    }


    $(".logo").click(function() {
        window.location = "/spare_park/home.php";
    });
});

function displayPrivacy() {
    $("#title").text("Privacy Policy");
    let policy = "Effective Date: [20-04-2023]" + "\n" + 

    "Thank you for using our parking app (SparePark). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our App. By using the App, you agree to the terms and conditions of this Privacy Policy." + "\n" + 
    
    "Information We Collect" + "\n" + 
    "1.1 Personal Information: We may collect personal information that you provide to us, such as your name, email address, phone number, and payment information when you register an account or make a reservation through the App." + "\n" + 
    
    "1.2 Usage Data: We may collect information about how you interact with the App, including your device information, IP address, browser type, and operating system. We may also collect data on your usage patterns, such as the time and date of your interactions with the App, the features you use, and the pages you visit." + "\n" + 
    
    "How We Use Your Information" + "\n" + 
    "2.1 Provide Services: We use your personal information to provide you with parking-related services, process your reservations, and communicate with you regarding your account and bookings." + "\n" + 
    
    "2.2 Improve and Personalize User Experience: We analyze usage data to understand user preferences, optimize the App's performance, and personalize your experience by recommending relevant parking options and offers." + "\n" + 
    
    "2.3 Marketing and Communications: With your consent, we may send you promotional materials, newsletters, and other communications about our services and partners. You can opt-out of these communications at any time." + "\n" + 
    
    "2.4 Legal Compliance: We may use your information to comply with applicable laws, regulations, or legal processes, or respond to requests from public and government authorities." + "\n" + 
    
    "Information Sharing" + "\n" + 
    "3.1 Service Providers: We may share your personal information with trusted third-party service providers who assist us in delivering the App's functionality, such as payment processors, hosting services, and customer support providers. These providers are bound by contractual obligations to protect your information and can only use it for the purposes specified by us." + "\n" + 
    
    "3.2 Business Transfers: In the event of a merger, acquisition, or sale of our company or assets, your personal information may be transferred as part of the transaction. We will notify you through prominent notice on our website or within the App if such a transfer occurs." + "\n" + 
    
    "3.3 Legal Requirements: We may disclose your information to law enforcement or government officials when required to comply with applicable laws, regulations, legal processes, or enforceable governmental requests." + "\n" + 
    
    "Data Security" + "\n" + 
    "We take reasonable measures to protect the confidentiality, integrity, and security of your personal information. However, no method of transmission or storage is completely secure. Therefore, while we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security." + "\n" + 
    
    "Your Choices and Rights" + "\n" + 
    "You have certain rights regarding your personal information, including the right to access, update, correct, and delete it. You can manage your account settings and communication preferences within the App or by contacting us directly. Please note that we may retain certain information as required by law or for legitimate business purposes." + "\n" + 
    
    "Children's Privacy" + "\n" + 
    "Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that we have collected personal information from a child under 13, please contact us immediately, and we will take steps to remove the information promptly." + "\n" + 
    
    "Changes to this Privacy Policy" + "\n" + 
    "We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated Privacy Policy within the App or through other means of communication. We encourage you to review this Privacy Policy periodically for any changes.";
    $("#data").text(policy);
}

function displayTerms() {
    $("#title").text("Terms and Conditions");

    let terms = "Terms and Conditions" + "\n" + 

    "Effective Date: [Insert Date]" + "\n" + 
    
    "Please read these Terms and Conditions (Terms) carefully before using our parking app (SparePark). These Terms govern your access to and use of the App. By using the App, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you should not use the App." + "\n" + 
    
    "Applicability and Eligibility" + "\n" + 
    "1.1 Applicability: These Terms apply to all users of the App, including registered users and those accessing the App as guests." + "\n" + 
    
    "1.2 Eligibility: By using the App, you represent and warrant that you are at least 18 years old or have reached the age of majority in your jurisdiction. If you are using the App on behalf of a company or organization, you represent and warrant that you have the authority to bind that entity to these Terms." + "\n" + 
    
    "User Account" + "\n" + 
    "2.1 Account Creation: To access certain features of the App, you may be required to create an account. You must provide accurate, complete, and up-to-date information during the registration process." + "\n" + 
    
    "2.2 Account Security: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security." + "\n" + 
    
    "App Usage and Conduct" + "\n" + 
    "3.1 Acceptable Use: You agree to use the App only for lawful purposes and in compliance with these Terms. You shall not engage in any activity that may disrupt or interfere with the functioning of the App or infringe upon the rights of others." + "\n" + 
    
    "3.2 Prohibited Conduct: The following actions are strictly prohibited:" + "\n" + 
    
    "a) Impersonating any person or entity or falsely stating or misrepresenting your affiliation with any person or entity." + "\n" + 
    "b) Uploading, posting, or transmitting any content that is unlawful, harmful, defamatory, obscene, or otherwise objectionable." + "\n" + 
    "c) Interfering with or disrupting the App, servers, or networks connected to the App." + "\n" + 
    "d) Engaging in any unauthorized commercial activities, such as spamming, advertising, or solicitation." + "\n" + 
    
    "Payments and Fees" + "\n" + 
    "4.1 Payment Processing: If you make any payments through the App, you agree to provide accurate and complete payment information. All payments are subject to the applicable fees and terms provided at the time of payment." + "\n" + 
    
    "4.2 Refunds: Refunds, if applicable, will be issued in accordance with our refund policy. Please refer to our refund policy for further details." + "\n" + 
    
    "Intellectual Property Rights" + "\n" + 
    "5.1 Ownership: The App and its content, including but not limited to text, graphics, logos, and software, are the intellectual property of the app owner or its licensors and are protected by copyright, trademark, and other intellectual property laws." + "\n" + 
    
    "5.2 Limited License: Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the App for your personal, non-commercial use." + "\n" + 
    
    "Disclaimer of Warranties" + "\n" + 
    "6.1 The App is provided on an 'as is' and 'as available' basis. We do not make any warranties or representations, whether express or implied, regarding the App, including but not limited to its accuracy, reliability, or suitability for any particular purpose." + "\n" + 
    
    "Limitation of Liability" + "\n" + 
    "7.1 To the extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of the App or these Terms, even if advised of the possibility of such damages." + "\n" + 
    
    "Indemnification" + "\n" + 
    "8.1 You agree to indemnify and hold us harmless from any";
    $("#data").text(terms);
}

function displayPOS() {
    $("#title").text("Product & Services");

    let pos = "Parking Spot Reservations: Our parking app allows users to search for available parking spots in their desired location, view pricing and availability, and make reservations in advance. Users can conveniently book and secure parking spaces, saving time and ensuring a hassle-free parking experience." + "\n" + 
    
    "Real-Time Parking Availability: The app provides real-time information on parking spot availability, including the number of vacant spaces in a parking lot or garage. Users can quickly find nearby parking options with available spots, reducing the frustration of searching for parking in congested areas." + "\n" + 
    
    "Mobile Payments: Our app offers seamless mobile payment options, allowing users to pay for parking directly from their smartphones. Users can securely store their payment information and easily complete transactions, eliminating the need for cash or physical payment methods." + "\n" + 
    
    "Navigation and Directions: The app provides navigation and directions to the selected parking spot, helping users navigate to their destination efficiently. It offers turn-by-turn directions, estimated travel times, and alternative routes to optimize the parking process and minimize delays." + "\n" + 
    
    "Parking Spot Reviews and Ratings: Users can share their parking experiences by providing reviews and ratings for parking spots they have used. This feature helps other users make informed decisions based on the feedback and recommendations of fellow parkers, fostering a community-driven approach to parking." + "\n" + 
    
    "Parking Reminders: The app offers a parking reminder feature that allows users to set reminders for their parking duration. Users receive notifications when their parking time is about to expire, helping them avoid parking violations and potential penalties." + "\n" + 
    
    "Parking History and Receipts: Users have access to their parking history within the app, providing a record of their past parking activities. The app also generates digital receipts for completed parking transactions, making it convenient for expense tracking or reimbursement purposes." + "\n" + 
    
    "Customer Support: Our app offers customer support channels, including in-app chat or messaging, email support, or a dedicated helpline. Users can reach out for assistance with any app-related issues, payment inquiries, or general questions.";
    $("#data").text(pos);
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
}