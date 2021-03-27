<template>
  <div class="page-container">
    <div class="main-content">
      <div class="section__content section__content--p30">
        <div class="au-card chart-percent-card">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="au-card-inner">
                  <h3 class="title-2 mb-4">Pengaduan</h3>
                  <b-form @submit.prevent="addData()">
                    <b-form-group
                      id="input-group-isi"
                      label="Isi Laporan:"
                      label-for="input-isi"
                    >
                      <b-form-textarea
                        id="textarea"
                        placeholder="Masukkan sesuatu..."
                        rows="3"
                        max-rows="6"
                        v-model="form.isi_laporan"
                      ></b-form-textarea>
                    </b-form-group>

                    <b-form-group
                      id="input-group-foto"
                      label="Foto:"
                      label-for="input-foto"
                    >
                      <b-form-file
                        placeholder="Pilih foto atau drop disini..."
                        drop-placeholder="Drop file disini..."
                      >
                      </b-form-file>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
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
  name: "Create-Pengaduan",
  data() {
    return {
      form: {
        nik: "12512515",
        isi_laporan: "",
        foto: "asdasdsad",
        lokasi: "Jawa Barat",
        kategori: "asdasdsad",
        tgl_kejadian: "2021-03-25",
        tgl_pengaduan: "2021-03-25",
        status: "Menunggu Persetujuan",
      },
    };
  },

  methods: {
    addData() {
      this.$store.dispatch("createPengaduan", this.form);
      this.$swal.fire("Omedetou", "Laporan berhasil di buat!", "success");
    },
  },
};
</script>
