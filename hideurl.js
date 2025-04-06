<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
    $(document).ready(function () {
        setTimeout(function () {

            // Select all links with a 'href' attribute
            $('a[href]').each(function () {
                var href = this.href;

                // Remove the 'href' attribute on hover
                $(this).mouseenter(function () {
                    $(this).removeAttr('href').css('cursor', 'pointer');
                });

                // Restore 'href' attribute when mouse leaves
                $(this).mouseleave(function () {
                    $(this).attr('href', href);
                });

                // Handle click event
                $(this).click(function (event) {
                    // Check if the link has a hash '#' in it (internal links)
                    if (href.toLowerCase().indexOf("#") >= 0) {
                        // You can add custom behavior here for internal links
                    } else {
                        // Open external links in a new tab
                        window.open(href, '_blank');
                    }
                });
            });

        }, 500); // Delay to ensure the document is fully loaded
    });
</script>
