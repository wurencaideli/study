/**
 * html 渲染模板
 */
function render(data){
    return `
    <table
        class="print-table-container"
        cellpadding="0" cellspacing="0">
        <tr>
            <th
                class="table-title no-border"
                align='center'
                colspan="24">
                ${data}
            </th>
        </tr>
    </table>
    `;
}

module.exports = {
    render,
};
