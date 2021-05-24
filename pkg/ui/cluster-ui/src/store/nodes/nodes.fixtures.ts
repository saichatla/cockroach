import { INodeStatus } from "../../util";
import Long from "long";
import { cockroach } from "@cockroachlabs/crdb-protobuf-client";

type INodesResponse = cockroach.server.serverpb.INodesResponse;

export const getNodeStatus = () => {
  const nodeResp: INodeStatus = {
    desc: {
      node_id: 1,
      address: {
        network_field: "tcp",
        address_field: "localhost:26257",
      },
      attrs: {},
      locality: {},
      ServerVersion: {
        major_val: 20,
        minor_val: 2,
        patch: 0,
      },
      build_tag: "v21.1.0-alpha.1-1124-ga51f2e212a",
      started_at: Long.fromString("1611220033263119000"),
      cluster_name: "",
      sql_address: {
        network_field: "tcp",
        address_field: "localhost:26257",
      },
    },
    build_info: {
      go_version: "go1.15.4",
      tag: "v21.1.0-alpha.1-1124-ga51f2e212a",
      time: "2021/01/18 11:44:57",
      revision: "a51f2e212a71ee356a01f14510238baac65e76e7",
      cgo_compiler: "Apple LLVM 12.0.0 (clang-1200.0.32.28)",
      platform: "darwin amd64",
      distribution: "CCL",
      type: "development",
      channel: "unknown",
      cgo_target_triple: "x86_64-apple-darwin20.2.0",
      env_channel: "unknown",
    },
    started_at: Long.fromString("1611220033263119000"),
    updated_at: Long.fromString("1611221833393566000"),
    metrics: {
      "build.timestamp": 1610970297,
      "changefeed.buffer_entries.in": 0,
      "changefeed.buffer_entries.out": 0,
      "changefeed.emit_nanos": 0,
      "changefeed.emitted_bytes": 0,
      "changefeed.emitted_messages": 0,
      "changefeed.error_retries": 0,
      "changefeed.failures": 0,
      "changefeed.flush_nanos": 0,
      "changefeed.flushes": 0,
      "changefeed.max_behind_nanos": 0,
      "changefeed.poll_request_nanos-max": 0,
      "changefeed.poll_request_nanos-p50": 0,
      "changefeed.poll_request_nanos-p75": 0,
      "changefeed.poll_request_nanos-p90": 0,
      "changefeed.poll_request_nanos-p99": 0,
      "changefeed.poll_request_nanos-p99.9": 0,
      "changefeed.poll_request_nanos-p99.99": 0,
      "changefeed.poll_request_nanos-p99.999": 0,
      "changefeed.processing_nanos": 0,
      "changefeed.running": 0,
      "changefeed.table_metadata_nanos": 0,
      "clock-offset.meannanos": 68000,
      "clock-offset.stddevnanos": 245000,
      "distsender.batches": 8006,
      "distsender.batches.async.sent": 0,
      "distsender.batches.async.throttled": 0,
      "distsender.batches.partial": 1386,
      "distsender.errors.inleasetransferbackoffs": 0,
      "distsender.errors.notleaseholder": 0,
      "distsender.rangelookups": 18,
      "distsender.rpc.addsstable.sent": 0,
      "distsender.rpc.adminchangereplicas.sent": 0,
      "distsender.rpc.adminmerge.sent": 0,
      "distsender.rpc.adminrelocaterange.sent": 0,
      "distsender.rpc.adminscatter.sent": 0,
      "distsender.rpc.adminsplit.sent": 0,
      "distsender.rpc.admintransferlease.sent": 0,
      "distsender.rpc.adminunsplit.sent": 0,
      "distsender.rpc.adminverifyprotectedtimestamp.sent": 0,
      "distsender.rpc.checkconsistency.sent": 0,
      "distsender.rpc.clearrange.sent": 0,
      "distsender.rpc.computechecksum.sent": 77,
      "distsender.rpc.conditionalput.sent": 929,
      "distsender.rpc.delete.sent": 32,
      "distsender.rpc.deleterange.sent": 204,
      "distsender.rpc.endtxn.sent": 2091,
      "distsender.rpc.err.ambiguousresulterrtype": 0,
      "distsender.rpc.err.batchtimestampbeforegcerrtype": 0,
      "distsender.rpc.err.communicationerrtype": 0,
      "distsender.rpc.err.conditionfailederrtype": 0,
      "distsender.rpc.err.errordetailtype(0)": 0,
      "distsender.rpc.err.errordetailtype(15)": 0,
      "distsender.rpc.err.errordetailtype(19)": 0,
      "distsender.rpc.err.errordetailtype(20)": 0,
      "distsender.rpc.err.errordetailtype(21)": 0,
      "distsender.rpc.err.errordetailtype(23)": 0,
      "distsender.rpc.err.errordetailtype(24)": 0,
      "distsender.rpc.err.errordetailtype(29)": 0,
      "distsender.rpc.err.errordetailtype(30)": 0,
      "distsender.rpc.err.errordetailtype(33)": 0,
      "distsender.rpc.err.indeterminatecommiterrtype": 0,
      "distsender.rpc.err.integeroverflowerrtype": 0,
      "distsender.rpc.err.intentmissingerrtype": 0,
      "distsender.rpc.err.internalerrtype": 0,
      "distsender.rpc.err.leaserejectederrtype": 0,
      "distsender.rpc.err.mergeinprogresserrtype": 0,
      "distsender.rpc.err.nodeunavailableerrtype": 0,
      "distsender.rpc.err.notleaseholdererrtype": 0,
      "distsender.rpc.err.oprequirestxnerrtype": 0,
      "distsender.rpc.err.raftgroupdeletederrtype": 0,
      "distsender.rpc.err.rangefeedretryerrtype": 0,
      "distsender.rpc.err.rangekeymismatcherrtype": 0,
      "distsender.rpc.err.rangenotfounderrtype": 0,
      "distsender.rpc.err.readwithinuncertaintyintervalerrtype": 0,
      "distsender.rpc.err.replicacorruptionerrtype": 0,
      "distsender.rpc.err.replicatooolderrtype": 0,
      "distsender.rpc.err.storenotfounderrtype": 0,
      "distsender.rpc.err.transactionabortederrtype": 0,
      "distsender.rpc.err.transactionpusherrtype": 0,
      "distsender.rpc.err.transactionretryerrtype": 0,
      "distsender.rpc.err.transactionretrywithprotorefresherrtype": 0,
      "distsender.rpc.err.transactionstatuserrtype": 0,
      "distsender.rpc.err.txnalreadyencounterederrtype": 0,
      "distsender.rpc.err.unsupportedrequesterrtype": 0,
      "distsender.rpc.err.writeintenterrtype": 0,
      "distsender.rpc.err.writetooolderrtype": 0,
      "distsender.rpc.export.sent": 0,
      "distsender.rpc.gc.sent": 18,
      "distsender.rpc.get.sent": 2702,
      "distsender.rpc.heartbeattxn.sent": 0,
      "distsender.rpc.import.sent": 0,
      "distsender.rpc.increment.sent": 0,
      "distsender.rpc.initput.sent": 8,
      "distsender.rpc.leaseinfo.sent": 0,
      "distsender.rpc.merge.sent": 147773,
      "distsender.rpc.migrate.sent": 0,
      "distsender.rpc.pushtxn.sent": 0,
      "distsender.rpc.put.sent": 546,
      "distsender.rpc.queryintent.sent": 781,
      "distsender.rpc.querytxn.sent": 0,
      "distsender.rpc.rangestats.sent": 0,
      "distsender.rpc.recomputestats.sent": 1,
      "distsender.rpc.recovertxn.sent": 0,
      "distsender.rpc.refresh.sent": 0,
      "distsender.rpc.refreshrange.sent": 0,
      "distsender.rpc.requestlease.sent": 0,
      "distsender.rpc.resolveintent.sent": 50,
      "distsender.rpc.resolveintentrange.sent": 16,
      "distsender.rpc.reversescan.sent": 0,
      "distsender.rpc.revertrange.sent": 0,
      "distsender.rpc.scan.sent": 2813,
      "distsender.rpc.sent": 8699,
      "distsender.rpc.sent.local": 8699,
      "distsender.rpc.sent.nextreplicaerror": 0,
      "distsender.rpc.subsume.sent": 0,
      "distsender.rpc.transferlease.sent": 0,
      "distsender.rpc.truncatelog.sent": 331,
      "distsender.rpc.writebatch.sent": 0,
      "engine.stalls": 0,
      "exec.error": 0,
      "exec.latency-max": 17825791,
      "exec.latency-p50": 327679,
      "exec.latency-p75": 7602175,
      "exec.latency-p90": 9961471,
      "exec.latency-p99": 15728639,
      "exec.latency-p99.9": 17825791,
      "exec.latency-p99.99": 17825791,
      "exec.latency-p99.999": 17825791,
      "exec.success": 8700,
      "gossip.bytes.received": 0,
      "gossip.bytes.sent": 0,
      "gossip.connections.incoming": 0,
      "gossip.connections.outgoing": 0,
      "gossip.connections.refused": 0,
      "gossip.infos.received": 0,
      "gossip.infos.sent": 0,
      "jobs.auto_create_stats.currently_running": 0,
      "jobs.auto_create_stats.fail_or_cancel_completed": 0,
      "jobs.auto_create_stats.fail_or_cancel_failed": 0,
      "jobs.auto_create_stats.fail_or_cancel_retry_error": 0,
      "jobs.auto_create_stats.resume_completed": 4,
      "jobs.auto_create_stats.resume_failed": 0,
      "jobs.auto_create_stats.resume_retry_error": 0,
      "jobs.backup.currently_running": 0,
      "jobs.backup.fail_or_cancel_completed": 0,
      "jobs.backup.fail_or_cancel_failed": 0,
      "jobs.backup.fail_or_cancel_retry_error": 0,
      "jobs.backup.resume_completed": 0,
      "jobs.backup.resume_failed": 0,
      "jobs.backup.resume_retry_error": 0,
      "jobs.changefeed.currently_running": 0,
      "jobs.changefeed.fail_or_cancel_completed": 0,
      "jobs.changefeed.fail_or_cancel_failed": 0,
      "jobs.changefeed.fail_or_cancel_retry_error": 0,
      "jobs.changefeed.resume_completed": 0,
      "jobs.changefeed.resume_failed": 0,
      "jobs.changefeed.resume_retry_error": 0,
      "jobs.create_stats.currently_running": 0,
      "jobs.create_stats.fail_or_cancel_completed": 0,
      "jobs.create_stats.fail_or_cancel_failed": 0,
      "jobs.create_stats.fail_or_cancel_retry_error": 0,
      "jobs.create_stats.resume_completed": 0,
      "jobs.create_stats.resume_failed": 0,
      "jobs.create_stats.resume_retry_error": 0,
      "jobs.import.currently_running": 0,
      "jobs.import.fail_or_cancel_completed": 0,
      "jobs.import.fail_or_cancel_failed": 0,
      "jobs.import.fail_or_cancel_retry_error": 0,
      "jobs.import.resume_completed": 0,
      "jobs.import.resume_failed": 0,
      "jobs.import.resume_retry_error": 0,
      "jobs.restore.currently_running": 0,
      "jobs.restore.fail_or_cancel_completed": 0,
      "jobs.restore.fail_or_cancel_failed": 0,
      "jobs.restore.fail_or_cancel_retry_error": 0,
      "jobs.restore.resume_completed": 0,
      "jobs.restore.resume_failed": 0,
      "jobs.restore.resume_retry_error": 0,
      "jobs.schema_change.currently_running": 0,
      "jobs.schema_change.fail_or_cancel_completed": 0,
      "jobs.schema_change.fail_or_cancel_failed": 0,
      "jobs.schema_change.fail_or_cancel_retry_error": 0,
      "jobs.schema_change.resume_completed": 0,
      "jobs.schema_change.resume_failed": 0,
      "jobs.schema_change.resume_retry_error": 0,
      "jobs.schema_change_gc.currently_running": 0,
      "jobs.schema_change_gc.fail_or_cancel_completed": 0,
      "jobs.schema_change_gc.fail_or_cancel_failed": 0,
      "jobs.schema_change_gc.fail_or_cancel_retry_error": 0,
      "jobs.schema_change_gc.resume_completed": 0,
      "jobs.schema_change_gc.resume_failed": 0,
      "jobs.schema_change_gc.resume_retry_error": 0,
      "jobs.stream_ingestion.currently_running": 0,
      "jobs.stream_ingestion.fail_or_cancel_completed": 0,
      "jobs.stream_ingestion.fail_or_cancel_failed": 0,
      "jobs.stream_ingestion.fail_or_cancel_retry_error": 0,
      "jobs.stream_ingestion.resume_completed": 0,
      "jobs.stream_ingestion.resume_failed": 0,
      "jobs.stream_ingestion.resume_retry_error": 0,
      "jobs.typedesc_schema_change.currently_running": 0,
      "jobs.typedesc_schema_change.fail_or_cancel_completed": 0,
      "jobs.typedesc_schema_change.fail_or_cancel_failed": 0,
      "jobs.typedesc_schema_change.fail_or_cancel_retry_error": 0,
      "jobs.typedesc_schema_change.resume_completed": 0,
      "jobs.typedesc_schema_change.resume_failed": 0,
      "jobs.typedesc_schema_change.resume_retry_error": 0,
      "kv.protectedts.reconciliation.errors": 0,
      "kv.protectedts.reconciliation.num_runs": 7,
      "kv.protectedts.reconciliation.records_processed": 0,
      "kv.protectedts.reconciliation.records_removed": 0,
      "liveness.epochincrements": 0,
      "liveness.heartbeatfailures": 1,
      "liveness.heartbeatlatency-max": 62914559,
      "liveness.heartbeatlatency-p50": 23068671,
      "liveness.heartbeatlatency-p75": 26214399,
      "liveness.heartbeatlatency-p90": 28311551,
      "liveness.heartbeatlatency-p99": 62914559,
      "liveness.heartbeatlatency-p99.9": 62914559,
      "liveness.heartbeatlatency-p99.99": 62914559,
      "liveness.heartbeatlatency-p99.999": 62914559,
      "liveness.heartbeatsinflight": 0,
      "liveness.heartbeatsuccesses": 475,
      "liveness.livenodes": 1,
      "node-id": 1,
      "requests.slow.distsender": 0,
      "round-trip-latency-max": 1114111,
      "round-trip-latency-p50": 688127,
      "round-trip-latency-p75": 786431,
      "round-trip-latency-p90": 950271,
      "round-trip-latency-p99": 1114111,
      "round-trip-latency-p99.9": 1114111,
      "round-trip-latency-p99.99": 1114111,
      "round-trip-latency-p99.999": 1114111,
      "rpc.heartbeats.failed": 0,
      "rpc.heartbeats.initializing": 0,
      "rpc.heartbeats.loops.exited": 0,
      "rpc.heartbeats.loops.started": 1,
      "rpc.heartbeats.nominal": 1,
      "schedules.error": 0,
      "schedules.malformed": 0,
      "schedules.round.jobs-started": 0,
      "schedules.round.num-jobs-running": 0,
      "schedules.round.reschedule-skip": 0,
      "schedules.round.reschedule-wait": 0,
      "schedules.round.schedules-ready-to-run": 0,
      "sql.bytesin": 0,
      "sql.bytesout": 0,
      "sql.conns": 0,
      "sql.ddl.count": 0,
      "sql.ddl.count.internal": 4,
      "sql.ddl.started.count": 0,
      "sql.ddl.started.count.internal": 16,
      "sql.delete.count": 0,
      "sql.delete.count.internal": 233,
      "sql.delete.started.count": 0,
      "sql.delete.started.count.internal": 233,
      "sql.disk.distsql.current": 0,
      "sql.disk.distsql.max-max": 0,
      "sql.disk.distsql.max-p50": 0,
      "sql.disk.distsql.max-p75": 0,
      "sql.disk.distsql.max-p90": 0,
      "sql.disk.distsql.max-p99": 0,
      "sql.disk.distsql.max-p99.9": 0,
      "sql.disk.distsql.max-p99.99": 0,
      "sql.disk.distsql.max-p99.999": 0,
      "sql.distsql.contended_queries.count": 0,
      "sql.distsql.exec.latency-max": 0,
      "sql.distsql.exec.latency-p50": 0,
      "sql.distsql.exec.latency-p75": 0,
      "sql.distsql.exec.latency-p90": 0,
      "sql.distsql.exec.latency-p99": 0,
      "sql.distsql.exec.latency-p99.9": 0,
      "sql.distsql.exec.latency-p99.99": 0,
      "sql.distsql.exec.latency-p99.999": 0,
      "sql.distsql.exec.latency.internal-max": 0,
      "sql.distsql.exec.latency.internal-p50": 0,
      "sql.distsql.exec.latency.internal-p75": 0,
      "sql.distsql.exec.latency.internal-p90": 0,
      "sql.distsql.exec.latency.internal-p99": 0,
      "sql.distsql.exec.latency.internal-p99.9": 0,
      "sql.distsql.exec.latency.internal-p99.99": 0,
      "sql.distsql.exec.latency.internal-p99.999": 0,
      "sql.distsql.flows.active": 0,
      "sql.distsql.flows.queue_wait-max": 0,
      "sql.distsql.flows.queue_wait-p50": 0,
      "sql.distsql.flows.queue_wait-p75": 0,
      "sql.distsql.flows.queue_wait-p90": 0,
      "sql.distsql.flows.queue_wait-p99": 0,
      "sql.distsql.flows.queue_wait-p99.9": 0,
      "sql.distsql.flows.queue_wait-p99.99": 0,
      "sql.distsql.flows.queue_wait-p99.999": 0,
      "sql.distsql.flows.queued": 0,
      "sql.distsql.flows.total": 0,
      "sql.distsql.queries.active": 0,
      "sql.distsql.queries.total": 2131,
      "sql.distsql.select.count": 0,
      "sql.distsql.select.count.internal": 0,
      "sql.distsql.service.latency-max": 0,
      "sql.distsql.service.latency-p50": 0,
      "sql.distsql.service.latency-p75": 0,
      "sql.distsql.service.latency-p90": 0,
      "sql.distsql.service.latency-p99": 0,
      "sql.distsql.service.latency-p99.9": 0,
      "sql.distsql.service.latency-p99.99": 0,
      "sql.distsql.service.latency-p99.999": 0,
      "sql.distsql.service.latency.internal-max": 0,
      "sql.distsql.service.latency.internal-p50": 0,
      "sql.distsql.service.latency.internal-p75": 0,
      "sql.distsql.service.latency.internal-p90": 0,
      "sql.distsql.service.latency.internal-p99": 0,
      "sql.distsql.service.latency.internal-p99.9": 0,
      "sql.distsql.service.latency.internal-p99.99": 0,
      "sql.distsql.service.latency.internal-p99.999": 0,
      "sql.distsql.vec.openfds": 0,
      "sql.exec.latency-max": 0,
      "sql.exec.latency-p50": 0,
      "sql.exec.latency-p75": 0,
      "sql.exec.latency-p90": 0,
      "sql.exec.latency-p99": 0,
      "sql.exec.latency-p99.9": 0,
      "sql.exec.latency-p99.99": 0,
      "sql.exec.latency-p99.999": 0,
      "sql.exec.latency.internal-max": 14680063,
      "sql.exec.latency.internal-p50": 655359,
      "sql.exec.latency.internal-p75": 6815743,
      "sql.exec.latency.internal-p90": 9437183,
      "sql.exec.latency.internal-p99": 11010047,
      "sql.exec.latency.internal-p99.9": 14680063,
      "sql.exec.latency.internal-p99.99": 14680063,
      "sql.exec.latency.internal-p99.999": 14680063,
      "sql.failure.count": 0,
      "sql.failure.count.internal": 12,
      "sql.feature_flag_denial": 0,
      "sql.hydrated_table_cache.hits": 0,
      "sql.hydrated_table_cache.misses": 0,
      "sql.insert.count": 0,
      "sql.insert.count.internal": 343,
      "sql.insert.started.count": 0,
      "sql.insert.started.count.internal": 343,
      "sql.mem.bulk.current": 0,
      "sql.mem.bulk.max-max": 0,
      "sql.mem.bulk.max-p50": 0,
      "sql.mem.bulk.max-p75": 0,
      "sql.mem.bulk.max-p90": 0,
      "sql.mem.bulk.max-p99": 0,
      "sql.mem.bulk.max-p99.9": 0,
      "sql.mem.bulk.max-p99.99": 0,
      "sql.mem.bulk.max-p99.999": 0,
      "sql.mem.distsql.current": 0,
      "sql.mem.distsql.max-max": 4011,
      "sql.mem.distsql.max-p50": 4011,
      "sql.mem.distsql.max-p75": 4011,
      "sql.mem.distsql.max-p90": 4011,
      "sql.mem.distsql.max-p99": 4011,
      "sql.mem.distsql.max-p99.9": 4011,
      "sql.mem.distsql.max-p99.99": 4011,
      "sql.mem.distsql.max-p99.999": 4011,
      "sql.mem.internal.session.current": 0,
      "sql.mem.internal.session.max-max": 4311,
      "sql.mem.internal.session.max-p50": 4011,
      "sql.mem.internal.session.max-p75": 4311,
      "sql.mem.internal.session.max-p90": 4311,
      "sql.mem.internal.session.max-p99": 4311,
      "sql.mem.internal.session.max-p99.9": 4311,
      "sql.mem.internal.session.max-p99.99": 4311,
      "sql.mem.internal.session.max-p99.999": 4311,
      "sql.mem.internal.txn.current": 0,
      "sql.mem.internal.txn.max-max": 4311,
      "sql.mem.internal.txn.max-p50": 4011,
      "sql.mem.internal.txn.max-p75": 4011,
      "sql.mem.internal.txn.max-p90": 4311,
      "sql.mem.internal.txn.max-p99": 4311,
      "sql.mem.internal.txn.max-p99.9": 4311,
      "sql.mem.internal.txn.max-p99.99": 4311,
      "sql.mem.internal.txn.max-p99.999": 4311,
      "sql.mem.root.current": 0,
      "sql.mem.root.max-max": 0,
      "sql.mem.root.max-p50": 0,
      "sql.mem.root.max-p75": 0,
      "sql.mem.root.max-p90": 0,
      "sql.mem.root.max-p99": 0,
      "sql.mem.root.max-p99.9": 0,
      "sql.mem.root.max-p99.99": 0,
      "sql.mem.root.max-p99.999": 0,
      "sql.mem.sql.session.current": 0,
      "sql.mem.sql.session.max-max": 0,
      "sql.mem.sql.session.max-p50": 0,
      "sql.mem.sql.session.max-p75": 0,
      "sql.mem.sql.session.max-p90": 0,
      "sql.mem.sql.session.max-p99": 0,
      "sql.mem.sql.session.max-p99.9": 0,
      "sql.mem.sql.session.max-p99.99": 0,
      "sql.mem.sql.session.max-p99.999": 0,
      "sql.mem.sql.txn.current": 0,
      "sql.mem.sql.txn.max-max": 0,
      "sql.mem.sql.txn.max-p50": 0,
      "sql.mem.sql.txn.max-p75": 0,
      "sql.mem.sql.txn.max-p90": 0,
      "sql.mem.sql.txn.max-p99": 0,
      "sql.mem.sql.txn.max-p99.9": 0,
      "sql.mem.sql.txn.max-p99.99": 0,
      "sql.mem.sql.txn.max-p99.999": 0,
      "sql.misc.count": 0,
      "sql.misc.count.internal": 2,
      "sql.misc.started.count": 0,
      "sql.misc.started.count.internal": 2,
      "sql.new_conns": 0,
      "sql.optimizer.fallback.count": 0,
      "sql.optimizer.fallback.count.internal": 0,
      "sql.optimizer.plan_cache.hits": 0,
      "sql.optimizer.plan_cache.hits.internal": 1641,
      "sql.optimizer.plan_cache.misses": 0,
      "sql.optimizer.plan_cache.misses.internal": 322,
      "sql.query.count": 0,
      "sql.query.count.internal": 1969,
      "sql.query.started.count": 0,
      "sql.query.started.count.internal": 1981,
      "sql.restart_savepoint.count": 0,
      "sql.restart_savepoint.count.internal": 0,
      "sql.restart_savepoint.release.count": 0,
      "sql.restart_savepoint.release.count.internal": 0,
      "sql.restart_savepoint.release.started.count": 0,
      "sql.restart_savepoint.release.started.count.internal": 0,
      "sql.restart_savepoint.rollback.count": 0,
      "sql.restart_savepoint.rollback.count.internal": 0,
      "sql.restart_savepoint.rollback.started.count": 0,
      "sql.restart_savepoint.rollback.started.count.internal": 0,
      "sql.restart_savepoint.started.count": 0,
      "sql.restart_savepoint.started.count.internal": 0,
      "sql.savepoint.count": 0,
      "sql.savepoint.count.internal": 0,
      "sql.savepoint.release.count": 0,
      "sql.savepoint.release.count.internal": 0,
      "sql.savepoint.release.started.count": 0,
      "sql.savepoint.release.started.count.internal": 0,
      "sql.savepoint.rollback.count": 0,
      "sql.savepoint.rollback.count.internal": 0,
      "sql.savepoint.rollback.started.count": 0,
      "sql.savepoint.rollback.started.count.internal": 0,
      "sql.savepoint.started.count": 0,
      "sql.savepoint.started.count.internal": 0,
      "sql.schema_changer.permanent_errors": 0,
      "sql.schema_changer.retry_errors": 0,
      "sql.schema_changer.running": 0,
      "sql.schema_changer.successes": 0,
      "sql.select.count": 0,
      "sql.select.count.internal": 594,
      "sql.select.started.count": 0,
      "sql.select.started.count.internal": 594,
      "sql.service.latency-max": 0,
      "sql.service.latency-p50": 0,
      "sql.service.latency-p75": 0,
      "sql.service.latency-p90": 0,
      "sql.service.latency-p99": 0,
      "sql.service.latency-p99.9": 0,
      "sql.service.latency-p99.99": 0,
      "sql.service.latency-p99.999": 0,
      "sql.service.latency.internal-max": 19922943,
      "sql.service.latency.internal-p50": 2228223,
      "sql.service.latency.internal-p75": 7864319,
      "sql.service.latency.internal-p90": 11010047,
      "sql.service.latency.internal-p99": 13631487,
      "sql.service.latency.internal-p99.9": 19922943,
      "sql.service.latency.internal-p99.99": 19922943,
      "sql.service.latency.internal-p99.999": 19922943,
      "sql.temp_object_cleaner.active_cleaners": 0,
      "sql.temp_object_cleaner.schemas_deletion_error": 0,
      "sql.temp_object_cleaner.schemas_deletion_success": 0,
      "sql.temp_object_cleaner.schemas_to_delete": 0,
      "sql.txn.abort.count": 0,
      "sql.txn.abort.count.internal": 0,
      "sql.txn.begin.count": 0,
      "sql.txn.begin.count.internal": 0,
      "sql.txn.begin.started.count": 0,
      "sql.txn.begin.started.count.internal": 0,
      "sql.txn.commit.count": 0,
      "sql.txn.commit.count.internal": 0,
      "sql.txn.commit.started.count": 0,
      "sql.txn.commit.started.count.internal": 0,
      "sql.txn.latency-max": 0,
      "sql.txn.latency-p50": 0,
      "sql.txn.latency-p75": 0,
      "sql.txn.latency-p90": 0,
      "sql.txn.latency-p99": 0,
      "sql.txn.latency-p99.9": 0,
      "sql.txn.latency-p99.99": 0,
      "sql.txn.latency-p99.999": 0,
      "sql.txn.latency.internal-max": 13107199,
      "sql.txn.latency.internal-p50": 7077887,
      "sql.txn.latency.internal-p75": 8388607,
      "sql.txn.latency.internal-p90": 9961471,
      "sql.txn.latency.internal-p99": 13107199,
      "sql.txn.latency.internal-p99.9": 13107199,
      "sql.txn.latency.internal-p99.99": 13107199,
      "sql.txn.latency.internal-p99.999": 13107199,
      "sql.txn.rollback.count": 0,
      "sql.txn.rollback.count.internal": 0,
      "sql.txn.rollback.started.count": 0,
      "sql.txn.rollback.started.count.internal": 0,
      "sql.update.count": 0,
      "sql.update.count.internal": 793,
      "sql.update.started.count": 0,
      "sql.update.started.count.internal": 793,
      "sqlliveness.is_alive.cache_hits": 0,
      "sqlliveness.is_alive.cache_misses": 0,
      "sqlliveness.sessions_deleted": 1,
      "sqlliveness.sessions_deletion_runs": 90,
      "sqlliveness.write_failures": 0,
      "sqlliveness.write_successes": 359,
      "sys.cgo.allocbytes": 77971088,
      "sys.cgo.totalbytes": 100474880,
      "sys.cgocalls": 26683,
      "sys.cpu.combined.percent-normalized": 0.017992756116387544,
      "sys.cpu.sys.ns": 16719000000,
      "sys.cpu.sys.percent": 0.04358245370413871,
      "sys.cpu.user.ns": 27755000000,
      "sys.cpu.user.percent": 0.028388570761411457,
      "sys.fd.open": 0,
      "sys.fd.softlimit": 0,
      "sys.gc.count": 157,
      "sys.gc.pause.ns": 167033785,
      "sys.gc.pause.percent": 0,
      "sys.go.allocbytes": 40960656,
      "sys.go.totalbytes": 122215440,
      "sys.goroutines": 165,
      "sys.host.disk.io.time": 0,
      "sys.host.disk.iopsinprogress": 0,
      "sys.host.disk.read.bytes": 1683034112,
      "sys.host.disk.read.count": 152617,
      "sys.host.disk.read.time": 33602383283,
      "sys.host.disk.weightedio.time": 0,
      "sys.host.disk.write.bytes": 4162080768,
      "sys.host.disk.write.count": 163780,
      "sys.host.disk.write.time": 42461472554,
      "sys.host.net.recv.bytes": 89868354,
      "sys.host.net.recv.packets": 26750,
      "sys.host.net.send.bytes": 89604637,
      "sys.host.net.send.packets": 27605,
      "sys.rss": 242069504,
      "sys.uptime": 1790,
      "timeseries.write.bytes": 14810484,
      "timeseries.write.errors": 0,
      "timeseries.write.samples": 147773,
      "txn.aborts": 0,
      "txn.commits": 2906,
      "txn.commits1PC": 705,
      "txn.durations-max": 20971519,
      "txn.durations-p50": 6291455,
      "txn.durations-p75": 9437183,
      "txn.durations-p90": 13631487,
      "txn.durations-p99": 19922943,
      "txn.durations-p99.9": 20971519,
      "txn.durations-p99.99": 20971519,
      "txn.durations-p99.999": 20971519,
      "txn.parallelcommits": 693,
      "txn.refresh.auto_retries": 0,
      "txn.refresh.fail": 0,
      "txn.refresh.fail_with_condensed_spans": 0,
      "txn.refresh.memory_limit_exceeded": 0,
      "txn.refresh.success": 0,
      "txn.restarts-max": 0,
      "txn.restarts-p50": 0,
      "txn.restarts-p75": 0,
      "txn.restarts-p90": 0,
      "txn.restarts-p99": 0,
      "txn.restarts-p99.9": 0,
      "txn.restarts-p99.99": 0,
      "txn.restarts-p99.999": 0,
      "txn.restarts.asyncwritefailure": 0,
      "txn.restarts.readwithinuncertainty": 0,
      "txn.restarts.serializable": 0,
      "txn.restarts.txnaborted": 0,
      "txn.restarts.txnpush": 0,
      "txn.restarts.unknown": 0,
      "txn.restarts.writetooold": 0,
      "txn.restarts.writetoooldmulti": 0,
    },
    store_statuses: [
      {
        desc: {
          store_id: 1,
          attrs: {},
          node: {
            node_id: 1,
            address: {
              network_field: "tcp",
              address_field: "localhost:26257",
            },
            attrs: {},
            locality: {},
            ServerVersion: {
              major_val: 20,
              minor_val: 2,
              patch: 0,
            },
            build_tag: "v21.1.0-alpha.1-1124-ga51f2e212a",
            started_at: Long.fromString("1611220033263119000"),
            cluster_name: "",
            sql_address: {
              network_field: "tcp",
              address_field: "localhost:26257",
            },
          },
          capacity: {
            capacity: Long.fromString("250790436864"),
            available: Long.fromString("86881308672"),
            range_count: 77,
            lease_count: 77,
            writes_per_second: 84.73865188960673,
            bytes_per_replica: {
              p10: 0,
              p25: 0,
              p50: 200,
              p75: 3768,
              p90: 172781,
              pMax: 42912738,
            },
            writes_per_replica: {
              p10: 0,
              p25: 0,
              p50: 0,
              p75: 0,
              p90: 0,
              pMax: 82.1,
            },
            used: Long.fromString("80665635"),
            logical_bytes: Long.fromString("46752052"),
            queries_per_second: 4.809416112885432,
          },
        },
        metrics: {
          abortspanbytes: 0,
          "addsstable.applications": 0,
          "addsstable.copies": 0,
          "addsstable.delay.enginebackpressure": 0,
          "addsstable.delay.total": 0,
          "addsstable.proposals": 0,
          capacity: 250790436864,
          "capacity.available": 86881308672,
          "capacity.reserved": 0,
          "capacity.used": 80664277,
          "follower_reads.success_count": 0,
          gcbytesage: 175196685058,
          intentage: -6,
          intentbytes: 0,
          intentcount: 0,
          "intentresolver.async.throttled": 0,
          "intents.abort-attempts": 0,
          "intents.poison-attempts": 0,
          "intents.resolve-attempts": 66,
          keybytes: 2753591,
          keycount: 53265,
          "kv.closed_timestamp.failures_to_close": 1,
          "kv.closed_timestamp.max_behind_nanos": 3928099000,
          "kv.rangefeed.catchup_scan_nanos": 561000,
          "kv.tenant_rate_limit.current_blocked": 0,
          "kv.tenant_rate_limit.num_tenants": 0,
          "kv.tenant_rate_limit.read_bytes_admitted": 0,
          "kv.tenant_rate_limit.read_requests_admitted": 0,
          "kv.tenant_rate_limit.write_bytes_admitted": 0,
          "kv.tenant_rate_limit.write_requests_admitted": 0,
          "leases.epoch": 75,
          "leases.error": 0,
          "leases.expiration": 2,
          "leases.success": 667,
          "leases.transfers.error": 0,
          "leases.transfers.success": 0,
          livebytes: 43984918,
          livecount: 38594,
          "queue.consistency.pending": 0,
          "queue.consistency.process.failure": 0,
          "queue.consistency.process.success": 77,
          "queue.consistency.processingnanos": 3746386000,
          "queue.gc.info.abortspanconsidered": 0,
          "queue.gc.info.abortspangcnum": 0,
          "queue.gc.info.abortspanscanned": 0,
          "queue.gc.info.intentsconsidered": 0,
          "queue.gc.info.intenttxns": 0,
          "queue.gc.info.numkeysaffected": 61,
          "queue.gc.info.pushtxn": 0,
          "queue.gc.info.resolvesuccess": 0,
          "queue.gc.info.resolvetotal": 0,
          "queue.gc.info.transactionspangcaborted": 0,
          "queue.gc.info.transactionspangccommitted": 0,
          "queue.gc.info.transactionspangcpending": 0,
          "queue.gc.info.transactionspangcstaging": 0,
          "queue.gc.info.transactionspanscanned": 0,
          "queue.gc.pending": 0,
          "queue.gc.process.failure": 0,
          "queue.gc.process.success": 2,
          "queue.gc.processingnanos": 44844000,
          "queue.merge.pending": 0,
          "queue.merge.process.failure": 0,
          "queue.merge.process.success": 0,
          "queue.merge.processingnanos": 0,
          "queue.merge.purgatory": 0,
          "queue.raftlog.pending": 0,
          "queue.raftlog.process.failure": 0,
          "queue.raftlog.process.success": 331,
          "queue.raftlog.processingnanos": 3280296000,
          "queue.raftsnapshot.pending": 0,
          "queue.raftsnapshot.process.failure": 0,
          "queue.raftsnapshot.process.success": 0,
          "queue.raftsnapshot.processingnanos": 0,
          "queue.replicagc.pending": 0,
          "queue.replicagc.process.failure": 0,
          "queue.replicagc.process.success": 0,
          "queue.replicagc.processingnanos": 0,
          "queue.replicagc.removereplica": 0,
          "queue.replicate.addreplica": 0,
          "queue.replicate.pending": 0,
          "queue.replicate.process.failure": 0,
          "queue.replicate.process.success": 0,
          "queue.replicate.processingnanos": 0,
          "queue.replicate.purgatory": 0,
          "queue.replicate.rebalancereplica": 0,
          "queue.replicate.removedeadreplica": 0,
          "queue.replicate.removelearnerreplica": 0,
          "queue.replicate.removereplica": 0,
          "queue.replicate.transferlease": 0,
          "queue.split.pending": 0,
          "queue.split.process.failure": 0,
          "queue.split.process.success": 0,
          "queue.split.processingnanos": 0,
          "queue.split.purgatory": 0,
          "queue.tsmaintenance.pending": 0,
          "queue.tsmaintenance.process.failure": 0,
          "queue.tsmaintenance.process.success": 3,
          "queue.tsmaintenance.processingnanos": 174301000,
          "raft.commandsapplied": 0,
          "raft.enqueued.pending": 0,
          "raft.entrycache.accesses": 485,
          "raft.entrycache.bytes": 217172,
          "raft.entrycache.hits": 331,
          "raft.entrycache.size": 850,
          "raft.heartbeats.pending": 0,
          "raft.process.applycommitted.latency-max": 7864319,
          "raft.process.applycommitted.latency-p50": 122879,
          "raft.process.applycommitted.latency-p75": 196607,
          "raft.process.applycommitted.latency-p90": 262143,
          "raft.process.applycommitted.latency-p99": 2752511,
          "raft.process.applycommitted.latency-p99.9": 7864319,
          "raft.process.applycommitted.latency-p99.99": 7864319,
          "raft.process.applycommitted.latency-p99.999": 7864319,
          "raft.process.commandcommit.latency-max": 7602175,
          "raft.process.commandcommit.latency-p50": 65535,
          "raft.process.commandcommit.latency-p75": 94207,
          "raft.process.commandcommit.latency-p90": 155647,
          "raft.process.commandcommit.latency-p99": 2490367,
          "raft.process.commandcommit.latency-p99.9": 7602175,
          "raft.process.commandcommit.latency-p99.99": 7602175,
          "raft.process.commandcommit.latency-p99.999": 7602175,
          "raft.process.handleready.latency-max": 60817407,
          "raft.process.handleready.latency-p50": 4980735,
          "raft.process.handleready.latency-p75": 6291455,
          "raft.process.handleready.latency-p90": 7602175,
          "raft.process.handleready.latency-p99": 12582911,
          "raft.process.handleready.latency-p99.9": 60817407,
          "raft.process.handleready.latency-p99.99": 60817407,
          "raft.process.handleready.latency-p99.999": 60817407,
          "raft.process.logcommit.latency-max": 60817407,
          "raft.process.logcommit.latency-p50": 4718591,
          "raft.process.logcommit.latency-p75": 5505023,
          "raft.process.logcommit.latency-p90": 7077887,
          "raft.process.logcommit.latency-p99": 11010047,
          "raft.process.logcommit.latency-p99.9": 60817407,
          "raft.process.logcommit.latency-p99.99": 60817407,
          "raft.process.logcommit.latency-p99.999": 60817407,
          "raft.process.tickingnanos": 136281000,
          "raft.process.workingnanos": 27577288000,
          "raft.rcvd.app": 0,
          "raft.rcvd.appresp": 0,
          "raft.rcvd.dropped": 0,
          "raft.rcvd.heartbeat": 0,
          "raft.rcvd.heartbeatresp": 0,
          "raft.rcvd.prevote": 0,
          "raft.rcvd.prevoteresp": 0,
          "raft.rcvd.prop": 0,
          "raft.rcvd.snap": 0,
          "raft.rcvd.timeoutnow": 0,
          "raft.rcvd.transferleader": 0,
          "raft.rcvd.vote": 0,
          "raft.rcvd.voteresp": 0,
          "raft.scheduler.latency-max": 7077887,
          "raft.scheduler.latency-p50": 27647,
          "raft.scheduler.latency-p75": 2490367,
          "raft.scheduler.latency-p90": 4718591,
          "raft.scheduler.latency-p99": 7077887,
          "raft.scheduler.latency-p99.9": 7077887,
          "raft.scheduler.latency-p99.99": 7077887,
          "raft.scheduler.latency-p99.999": 7077887,
          "raft.ticks": 9000,
          "raftlog.behind": 0,
          "raftlog.truncated": 5716,
          "range.adds": 0,
          "range.merges": 0,
          "range.raftleadertransfers": 0,
          "range.removes": 0,
          "range.snapshots.applied-initial": 0,
          "range.snapshots.applied-non-voter": 0,
          "range.snapshots.applied-voter": 0,
          "range.snapshots.generated": 0,
          "range.splits": 0,
          ranges: 77,
          "ranges.overreplicated": 0,
          "ranges.unavailable": 0,
          "ranges.underreplicated": 0,
          "rebalancing.lease.transfers": 0,
          "rebalancing.queriespersecond": 4.856714489781479,
          "rebalancing.range.rebalances": 0,
          "rebalancing.writespersecond": 85.36030022936667,
          replicas: 77,
          "replicas.leaders": 77,
          "replicas.leaders_not_leaseholders": 0,
          "replicas.leaseholders": 77,
          "replicas.quiescent": 77,
          "replicas.reserved": 0,
          "requests.backpressure.split": 0,
          "requests.slow.latch": 0,
          "requests.slow.lease": 0,
          "requests.slow.raft": 0,
          "rocksdb.block.cache.hits": 52720,
          "rocksdb.block.cache.misses": 4276,
          "rocksdb.block.cache.pinned-usage": 0,
          "rocksdb.block.cache.usage": 2034335,
          "rocksdb.bloom.filter.prefix.checked": 916,
          "rocksdb.bloom.filter.prefix.useful": 839,
          "rocksdb.compacted-bytes-read": 17160778,
          "rocksdb.compacted-bytes-written": 16849064,
          "rocksdb.compactions": 2,
          "rocksdb.encryption.algorithm": 0,
          "rocksdb.estimated-pending-compaction": 0,
          "rocksdb.flushed-bytes": 322699,
          "rocksdb.flushes": 1,
          "rocksdb.ingested-bytes": 0,
          "rocksdb.memtable.total-size": 67108864,
          "rocksdb.num-sstables": 4,
          "rocksdb.read-amplification": 1,
          "rocksdb.table-readers-mem-estimate": 1848,
          "storage.disk-slow": 0,
          "storage.disk-stalled": 0,
          sysbytes: 25712,
          syscount: 435,
          totalbytes: 46752052,
          "tscache.skl.pages": 2,
          "tscache.skl.rotations": 2,
          "txnrecovery.attempts.pending": 0,
          "txnrecovery.attempts.total": 0,
          "txnrecovery.failures": 0,
          "txnrecovery.successes.aborted": 0,
          "txnrecovery.successes.committed": 0,
          "txnrecovery.successes.pending": 0,
          "txnwaitqueue.deadlocks_total": 0,
          "txnwaitqueue.pushee.waiting": 0,
          "txnwaitqueue.pusher.slow": 0,
          "txnwaitqueue.pusher.wait_time-max": 0,
          "txnwaitqueue.pusher.wait_time-p50": 0,
          "txnwaitqueue.pusher.wait_time-p75": 0,
          "txnwaitqueue.pusher.wait_time-p90": 0,
          "txnwaitqueue.pusher.wait_time-p99": 0,
          "txnwaitqueue.pusher.wait_time-p99.9": 0,
          "txnwaitqueue.pusher.wait_time-p99.99": 0,
          "txnwaitqueue.pusher.wait_time-p99.999": 0,
          "txnwaitqueue.pusher.waiting": 0,
          "txnwaitqueue.query.wait_time-max": 0,
          "txnwaitqueue.query.wait_time-p50": 0,
          "txnwaitqueue.query.wait_time-p75": 0,
          "txnwaitqueue.query.wait_time-p90": 0,
          "txnwaitqueue.query.wait_time-p99": 0,
          "txnwaitqueue.query.wait_time-p99.9": 0,
          "txnwaitqueue.query.wait_time-p99.99": 0,
          "txnwaitqueue.query.wait_time-p99.999": 0,
          "txnwaitqueue.query.waiting": 0,
          valbytes: 43998461,
          valcount: 90515,
        },
      },
    ],
    args: [
      "./cockroach",
      "start-single-node",
      "--listen-addr=localhost",
      "--insecure",
    ],
    activity: {
      "1": {
        incoming: Long.fromString("46834"),
        outgoing: Long.fromString("56573"),
        latency: Long.fromString("2846186"),
      },
    },
    total_system_memory: Long.fromString("17179869184"),
    num_cpus: 4,
  };
  return nodeResp;
};

export const getNodesResponse = (): INodesResponse => {
  return {
    nodes: [getNodeStatus()],
    liveness_by_node_id: {},
  };
};
