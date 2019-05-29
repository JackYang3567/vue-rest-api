
<template>
    <div class="profile-modal">
        <div class="container">
            <div class="wrappers">
                <div class="wrap-modal">
                    <div id="modal" class="modal modal-service">
                        <div class="modal-content">
                            <div class="m-header">
                                <div class="icon-close">
                                    <a href="#!" class="modal-close"><i class="fas fa-times"></i></a>
                                </div>
                            </div>
                            <div class="m-avatar">
                                <img src="images/testimonial1.png" alt="">
                                <h4>Jonathan</h4>
                                <span>Agent</span>
                            </div>
                            <div class="m-info">
                                <ul>
                                    <li>Name <span>Jonathan Paulo</span></li>
                                    <li>Age <span>29</span></li>
                                    <li>Address <span>United States</span></li>
                                </ul>
                            </div>
                            <div class="m-gallery">
                                <div class="row">
                                    <div class="col s6">
                                        <a href="images/gallery1.jpg" data-lightbox="galleryProfile"><img src="images/gallery1.jpg" alt=""></a>
                                    </div>
                                    <div class="col s6">
                                        <a href="images/gallery2.jpg" data-lightbox="galleryProfile"><img src="images/gallery2.jpg" alt=""></a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s6">
                                        <a href="images/gallery3.jpg" data-lightbox="galleryProfile"><img src="images/gallery3.jpg" alt=""></a>
                                    </div>
                                    <div class="col s6">
                                        <a href="images/gallery4.jpg" data-lightbox="galleryProfile"><img src="images/gallery4.jpg" alt=""></a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s6">
                                        <a href="images/gallery5.jpg" data-lightbox="galleryProfile"><img src="images/gallery5.jpg" alt=""></a>
                                    </div>
                                    <div class="col s6">
                                        <a href="images/gallery6.jpg" data-lightbox="galleryProfile"><img src="images/gallery6.jpg" alt=""></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'Modal',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
