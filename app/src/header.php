<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="icon" href="./assets/images/favicon.png" type="image/png">
	<title><?= $site ?></title>
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://sertified.finance/">
	<meta property="og:title" content="<?= $site ?> - Compare Loans Online | Find The Best Loan Rates & Apply Online">
	<meta property="og:description" content="<?= $site ?>">
	<meta property="og:image" content="https://sertified.finance/assets/images/desktop.jpg">
	<link rel="stylesheet" href="./assets/css/main.css?v=0.1">

	<!-- Recaptcha Here -->
	<script src="https://www.google.com/recaptcha/api.js?render=<?= $recaptcha_client_secret ?>"></script>
	<script>
		grecaptcha.ready(function() {
			grecaptcha.execute('<?= $recaptcha_client_secret ?>', {
				action: 'contact'
			}).then(function(token) {
				document.getElementById('recaptchaResponse1').value = token;
				document.getElementById('recaptchaResponse2').value = token;
				document.getElementById('recaptchaResponse3').value = token;
			});
		});
	</script>
</head>

<body>