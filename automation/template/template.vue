<template>
    <div class="view-container page-container">
        <%= data.test %>
        <div class="page-query-box">
            <%_ [{name:"啊实打实的"}].forEach((item)=>{ -%>
            <%- item.name %>
            <%_ }); -%>
            <el-form
                :model="form"
                size="mini"
                ref="queryFormRef"
                class="query-more-form el-form-com"
                onsubmit="return false"
                :inline="true"
            >
                <el-form-item label="订单号" prop="name">
                    <el-input
                        v-model="form.name"
                        placeholder="请输入订单号"
                        clearable
                        size="small"
                        style="width: 225px"
                        @clear="handleQuery"
                        @keyup.enter.native="handleQuery"
                    />
                </el-form-item>
                <el-form-item label="订单号" prop="nickname">
                    <el-input
                        v-model="form.nickname"
                        placeholder="请输入订单号"
                        clearable
                        size="small"
                        style="width: 225px"
                        @clear="handleQuery"
                        @keyup.enter.native="handleQuery"
                    />
                </el-form-item>
                <el-form-item label="车牌号" prop="nickname">
                    <el-input
                        v-model="form.nickname"
                        placeholder="请输入车牌号"
                        clearable
                        size="small"
                        style="width: 225px"
                        @clear="handleQuery"
                        @keyup.enter.native="handleQuery"
                    />
                </el-form-item>
                <el-form-item label="发货单位" prop="nickname">
                    <el-input
                        v-model="form.nickname"
                        placeholder="请输入发货单位"
                        clearable
                        size="small"
                        style="width: 225px"
                        @clear="handleQuery"
                        @keyup.enter.native="handleQuery"
                    />
                </el-form-item>
                <el-form-item label="收货单位" prop="nickname">
                    <el-input
                        v-model="form.nickname"
                        placeholder="请输入收货单位"
                        clearable
                        size="small"
                        style="width: 225px"
                        @clear="handleQuery"
                        @keyup.enter.native="handleQuery"
                    />
                </el-form-item>
                <el-form-item label="状态" prop="nickname">
                    <el-select
                        class="w-100"
                        v-model="form.nickname"
                        placeholder="请选择主体类型"
                        clearable
                        style="width: 225px"
                    >
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        class="search-btn"
                        :loading="loading"
                        @click="handleQuery"
                    >
                        搜索
                        <i class="el-icon-search el-icon--right"></i>
                    </el-button>
                    <el-button class="reset-btn" @click="resetForm">
                        重置
                        <i class="el-icon-refresh el-icon--right"></i>
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="page-content-box">
            <div class="bt-list-container">
                <!-- <el-button class="add-btn-min" @click="onUpdate()">
                    新增
                    <i class="el-icon-plus el-icon--right"></i>
                </el-button> -->
                <!-- <el-button 
                    :disabled="currRows.length==0"
                    class="delete-btn-min" @click="handleDelete()">
                    批量删除
                    <i class="el-icon-delete el-icon--right"></i>
                </el-button> -->
                <el-button class="export-btn-min" @click="handleExport()">
                    导出
                    <i class="el-icon-edit-outline el-icon--right"></i>
                </el-button>
            </div>
            <div class="table-container">
                <el-table
                    :data="dataList"
                    border
                    :header-cell-style="{ background: '#E4ECF4', color: '#333' }"
                    style="width: 100%"
                    height="100%"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column
                        fixed="left"
                        type="selection"
                        width="50"
                        align="center"
                    ></el-table-column>
                    <!-- <el-table-column type="index" width="80" label="序号" align="center">
                    <template slot-scope="scope">
                        {{((page.page - 1)*page.limit)+scope.$index+1}}
                    </template>
                </el-table-column> -->
                    <el-table-column
                        prop="prjId"
                        width="100"
                        show-overflow-tooltip
                        label="订单号"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        prop="prjName"
                        show-overflow-tooltip
                        label="车牌号"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        prop="prjAddress"
                        show-overflow-tooltip
                        label="司机"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        prop="coordX"
                        width="100"
                        show-overflow-tooltip
                        label="联系方式"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        prop="coordY"
                        width="100"
                        show-overflow-tooltip
                        label="过磅类型"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        prop="prjDescription"
                        show-overflow-tooltip
                        label="发货单位"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        prop="prjDescription"
                        show-overflow-tooltip
                        label="收货单位"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        prop="prjDescription"
                        show-overflow-tooltip
                        label="毛重"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        prop="prjDescription"
                        show-overflow-tooltip
                        label="皮重"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        prop="prjDescription"
                        show-overflow-tooltip
                        label="净重"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        prop="prjDescription"
                        show-overflow-tooltip
                        label="实重"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        prop="prjDescription"
                        show-overflow-tooltip
                        label="货名"
                        align="center"
                    ></el-table-column>
                    <el-table-column
                        width="120"
                        prop="track"
                        show-overflow-tooltip
                        label="操作"
                        align="center"
                        fixed="right"
                    >
                        <template slot-scope="scope">
                            <el-button
                                @click="onUpdate(scope.row, { isShow: true })"
                                type="text"
                                class="handle-default-btn"
                            >
                                详情
                            </el-button>
                            <el-button
                                type="text"
                                class="handle-delete-btn"
                                @click="handleDelete(scope.row)"
                            >
                                删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-pagination
                class="el-pagination-container"
                background
                style="text-align: right"
                @current-change="
                    page => {
                        queryParams.page = page;
                        getDataList();
                    }
                "
                @size-change="
                    size => {
                        queryParams.size = size;
                        getDataList();
                    }
                "
                :current-page="queryParams.page"
                :page-sizes="[10, 20, 50]"
                :page-size="queryParams.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="queryParams.totalSize"
                :page-count="queryParams.size"
            ></el-pagination>
        </div>
        <DataInfoDialog ref="DataInfoDialogRef" @onSuccess="getDataList"></DataInfoDialog>
    </div>
</template>

<script>
/**
 * 订单监管页面
 */
import { ProjectQuery, delProject } from '@/api/project';
import DataInfoDialog from './components/DataInfoDialog';
import { query as queryProjectApi, del as delProjectApi } from '@/api/project_1';

export default {
    components: {
        DataInfoDialog,
    },
    data() {
        return {
            loading: false,
            form: {},
            queryParams: {
                page: 1,
                size: 10,
                totalSize: 0,
            }, //查询参数
            dataList: [],
            currRows: [], //多选的数据
            options:[],
        };
    },
    created() {
        this.getDataList();
    },
    methods: {
        //初始化
        getDataList() {
            const query = {
                ...this.queryParams,
                ...this.form,
                curPage: this.queryParams.page,
                pageSize: this.queryParams.size,
            };
            this.loading = true;
            queryProjectApi(query)
                .then(res => {
                    if (!res) return;
                    res.data = res.data || {};
                    this.dataList = res.data.records || [];
                    this.queryParams.totalSize = res.data.total || 0;
                })
                .catch(() => {
                    return;
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        /** 搜索按钮操作 */
        handleQuery() {
            this.queryParams.page = 1;
            this.getDataList();
        },
        resetForm() {
            if (!this.$refs.queryFormRef) return;
            this.$refs.queryFormRef.resetFields();
            this.getDataList();
        },
        onUpdate(row, option) {
            if (!this.$refs.DataInfoDialogRef) return;
            this.$refs.DataInfoDialogRef.initData(true, row || {}, option);
        },
        handleDelete(data) {
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            })
                .then(() => {
                    let ids = [];
                    if (Array.isArray(data)) {
                        ids = data.map(item => item.prjId);
                    } else {
                        ids = [data.prjId];
                    }
                    delProjectApi(ids.join(','))
                        .then(res => {
                            this.getDataList();
                        })
                        .catch(() => {
                            return;
                        });
                })
                .catch(() => {
                    return;
                });
        },
        handleExport() {},
        /** 多选操作 */
        handleSelectionChange(rows) {
            this.currRows = rows || [];
        },
    },
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.view-container {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px;
    flex-direction: column;
    background-color: #e9f3fd;
    row-gap: 15px;
    > .page-query-box {
        padding: 10px 10px 0 10px;
    }
    > .page-content-box {
        display: flex;
        flex-direction: column;
        padding: 10px;
        > .bt-list-container {
            height: fit-content;
            // padding: 10px 10px 0 10px;
        }
        > .table-container {
            flex: 1 0 0;
            height: 0;
        }
        > .el-pagination-container {
            padding: 10px;
        }
    }
}
.seachHeader {
    width: 100%;
    padding: 10px;
    display: flex;
    column-gap: 10px;
    row-gap: 5px;
    background: #fff;
    border-radius: 6px;
    flex-wrap: wrap;
    .inputBox {
        width: 280px;
    }
}
.manageContainer {
    flex: 1;
    width: 100%;
    padding: 10px;
    background: #fff;
    border-radius: 6px;
    overflow: auto;
    ::v-deep .el-button--mini {
        padding: 6px 15px;
    }
}
</style>
