<template>
  <div class="page-container">
    <div class="main-content">
      <div class="section__content section__content--p30">
        <div class="au-card chart-percent-card">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="au-card-inner">
                  {{ user }}
                  <h3 class="title-2 mb-4">Pengaduan</h3>
                  <vue-good-table
                    style-class="vgt-table border-0 mt-3"
                    :columns="columns"
                    :rows="penga"
                    :pagination-options="{
                      enabled: true,
                      perPage: 3,
                    }"
                  >
                    <template slot="table-row" slot-scope="props">
                      <span v-if="props.column.field == 'action'">
                        <router-link
                          :to="{
                            name: 'ShowPengaduan',
                            params: { id: props.row.id_pengaduan },
                          }"
                          class="btn btn-primary no-wrap mr-1 btn-icon btn-md"
                        >
                          <i class="fas fa-eye"></i>
                        </router-link>
                        <b-button
                          v-on:click="deletePengaduan(props.row.id_pengaduan)"
                          class="btn btn-danger no-wrap mr-1 btn-icon btn-md"
                        >
                          <i class="fas fa-trash"></i>
                        </b-button>
                      </span>
                    </template>
                  </vue-good-table>
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
import { mapGetters } from "vuex";
export default {
  name: "Read-Pengaduan",
  data() {
    return {
      columns: [
        {
          label: "Tanggal Pengaduan",
          field: "tgl_pengaduan",
        },
        {
          label: "Nik",
          field: "nik",
        },
        {
          label: "Isi Laporan",
          field: "isi_laporan",
        },
        {
          label: "Foto",
          field: "foto",
        },
        {
          label: "Action",
          field: "action",
        },
      ],
    };
  },

  computed: {
    penga() {
      return this.$store.state.pengaduan.pengaduan;
    },
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
      user: "user",
    }),
  },

  methods: {
    deletePengaduan(id) {
      this.$swal
        .fire({
          title: "Apa kamu yakin?",
          text: "Kamu tidak bisa mengembalikan ini!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ya, hapus ini!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("deletePengaduan", id);
            this.$swal.fire(
              "Terhapus!",
              "Laporan kamu berhasil di hapus!.",
              "success"
            );
          }
        });
    },
  },

  async mounted() {
    this.$store.dispatch("loadPengaduan");
  },
};
</script>
