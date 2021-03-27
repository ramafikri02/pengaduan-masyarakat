<template>
  <div class="page-container">
    <div class="main-content">
      <div class="section__content section__content--p30">
        <div class="au-card chart-percent-card">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="au-card-inner">
                  {{ this.$route.params.id }}
                  {{ pengaduan }}
                  <h3 class="title-2 mb-4">Detail Pengaduan</h3>

                  <b-form>
                    <b-form-group
                      id="input-group-tgl-pengaduan"
                      label="Tanggal Pengaduan:"
                      label-for="input-tgl-pengaduan"
                    >
                      <b-form-input
                        id="input-tgl-pengaduan"
                        readonly
                        v-model="pengaduan.tgl_pengaduan"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-nik"
                      label="NIK:"
                      label-for="input-nik"
                    >
                      <b-form-input
                        id="input-nik"
                        readonly
                        v-model="pengaduan.nik"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-isi"
                      label="Isi Laporan:"
                      label-for="input-isi"
                    >
                      <b-form-textarea
                        id="textarea"
                        rows="3"
                        max-rows="6"
                        readonly
                        v-model="pengaduan.isi_laporan"
                      ></b-form-textarea>
                    </b-form-group>

                    <router-link
                      class="btn btn-primary"
                      :to="{
                        name: 'ReadPengaduan',
                      }"
                    >
                      <i class="fas fa-arrow-alt-circle-left"></i> Kembali
                    </router-link>
                  </b-form>
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
  name: "Show-Pengaduan",
  data() {
    return {
      id_pengaduan: 0,
      tgl_pengaduan: "",
      nik: "",
      isi_laporan: "",
      description: "",
    };
  },

  computed: {
    pengaduan() {
      return this.$store.state.pengaduan.pengaduanById;
    },
  },

  async mounted() {
    this.$store.dispatch("loadPengaduanID", this.$route.params.id);
  },
};
</script>
