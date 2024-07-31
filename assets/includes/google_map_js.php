	<!-- Google Map js -->
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1cZtqidvg0m-f8Hd3S6RHx1mY-omuLS4 "></script>
	<script>
		function initialize() {
			var mapOptions = {
				zoom: 15,
				scrollwheel: false,
				center: new google.maps.LatLng(51.378575, 0.118517)
			};

			var map = new google.maps.Map(document.getElementById('googleMap'),
				mapOptions);


			var marker = new google.maps.Marker({
				position: map.getCenter(),
				animation: google.maps.Animation.BOUNCE,
				icon: 'assets/images/map.webp',
				map: map
			});

		}
		google.maps.event.addDomListener(window, 'load', initialize);
	</script>

