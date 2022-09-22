package com.ruoyi.task.controller;

import java.util.List;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.task.domain.TaskReport;
import com.ruoyi.task.service.ITaskReportService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 报告系统Controller
 * 
 * @author zongyoucheng
 * @date 2022-09-22
 */
@Controller
@RequestMapping("/task/report")
public class TaskReportController extends BaseController
{
    private String prefix = "task/report";

    @Autowired
    private ITaskReportService taskReportService;

    @RequiresPermissions("task:report:view")
    @GetMapping()
    public String report()
    {
        return prefix + "/report";
    }

    /**
     * 查询报告系统列表
     */
    @RequiresPermissions("task:report:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(TaskReport taskReport)
    {
        startPage();
        List<TaskReport> list = taskReportService.selectTaskReportList(taskReport);
        return getDataTable(list);
    }

    /**
     * 导出报告系统列表
     */
    @RequiresPermissions("task:report:export")
    @Log(title = "报告系统", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(TaskReport taskReport)
    {
        List<TaskReport> list = taskReportService.selectTaskReportList(taskReport);
        ExcelUtil<TaskReport> util = new ExcelUtil<TaskReport>(TaskReport.class);
        return util.exportExcel(list, "报告系统数据");
    }

    /**
     * 新增报告系统
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存报告系统
     */
    @RequiresPermissions("task:report:add")
    @Log(title = "报告系统", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(TaskReport taskReport)
    {
        return toAjax(taskReportService.insertTaskReport(taskReport));
    }

    /**
     * 修改报告系统
     */
    @RequiresPermissions("task:report:edit")
    @GetMapping("/edit/{reportId}")
    public String edit(@PathVariable("reportId") Long reportId, ModelMap mmap)
    {
        TaskReport taskReport = taskReportService.selectTaskReportByReportId(reportId);
        mmap.put("taskReport", taskReport);
        return prefix + "/edit";
    }

    /**
     * 修改保存报告系统
     */
    @RequiresPermissions("task:report:edit")
    @Log(title = "报告系统", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(TaskReport taskReport)
    {
        return toAjax(taskReportService.updateTaskReport(taskReport));
    }

    /**
     * 删除报告系统
     */
    @RequiresPermissions("task:report:remove")
    @Log(title = "报告系统", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(taskReportService.deleteTaskReportByReportIds(ids));
    }
}
