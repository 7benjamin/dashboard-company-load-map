interface Data1 {
    number: number;
    no_laporan: string;
    pembuat_laporan: string;
    tanggal_laporan: string;
    tanggal_dialihkan: string;
    tanggal_respon: string;
    tanggal_recovery: string;
    durasi_respon: string;
    durasi_recovery: string;
    posko_awal: string;
    posko_tujuan: string;
    status: string;
    id_pelanggan: string;
    nama_pelapor: string;
    alamat_pelapor: string;
    no_telp_pelapor: string;
    keterangan_pelapor: string;
    sumber_laporan: string;
    posko: string;
}

interface Data2 {
    number: number;
    no_laporan: string;
    tanggal_laporan: string;
    tanggal_respon: string;
    tanggal_recovery: string;
    jumlah_lapor: number;
    durasi_respon: string;
    durasi_recovery: string;
    status: string;
    id_pelanggan: string;
    nama_pelapor: string;
    alamat_pelapor: string;
    no_telp_pelapor: string;
    keterangan_pelapor: string;
    sumber_laporan: string;
    posko: string;
}

interface Data3 {
    number: number;
    no_laporan: string;
    tanggal_laporan: string;
    tanggal_respon: string;
    tanggal_recovery: string;
    durasi_respon: string;
    durasi_recovery: string;
    status: string;
    referensi_marking: string;
    id_pelanggan: string;
    nama_pelapor: string;
    alamat_pelapor: string;
    no_telp_pelapor: string;
    keterangan_pelapor: string;
    posko: string;
}

interface Rekap1 {
    id: number;
    nama_unit: string;
    total: number;
    selesai: string;
    in_progress: number;
    avg: number;
    max: number;
    min: number;
    dt_avg: number;
    dt_max: number;
    dt_min: number;
    dt_more_sla: number;
    dt_less_sla: number;
    rt_avg: number;
    rt_max: number;
    rt_min: number;
    rt_more_sla: number;
    rt_less_sla: number;
    ret_avg: number;
    ret_max: number;
    ret_min: number;
    ret_more_sla: number;
    ret_less_sla: number;
}

export type {
    Data1,
    Data2,
    Data3,
    Rekap1
}