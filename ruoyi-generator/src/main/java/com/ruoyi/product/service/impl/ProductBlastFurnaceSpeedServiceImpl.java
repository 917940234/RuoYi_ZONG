package com.ruoyi.product.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.product.mapper.ProductBlastFurnaceSpeedMapper;
import com.ruoyi.product.domain.ProductBlastFurnaceSpeed;
import com.ruoyi.product.service.IProductBlastFurnaceSpeedService;
import com.ruoyi.common.core.text.Convert;

/**
 * 出铁流速流量预报Service业务层处理
 * 
 * @author zongyoucheng
 * @date 2022-11-26
 */
@Service
public class ProductBlastFurnaceSpeedServiceImpl implements IProductBlastFurnaceSpeedService 
{
    @Autowired
    private ProductBlastFurnaceSpeedMapper productBlastFurnaceSpeedMapper;

    /**
     * 查询出铁流速流量预报
     * 
     * @param blastFurnaceSpeedId 出铁流速流量预报主键
     * @return 出铁流速流量预报
     */
    @Override
    public ProductBlastFurnaceSpeed selectProductBlastFurnaceSpeedByBlastFurnaceSpeedId(Long blastFurnaceSpeedId)
    {
        return productBlastFurnaceSpeedMapper.selectProductBlastFurnaceSpeedByBlastFurnaceSpeedId(blastFurnaceSpeedId);
    }

    /**
     * 查询出铁流速流量预报列表
     * 
     * @param productBlastFurnaceSpeed 出铁流速流量预报
     * @return 出铁流速流量预报
     */
    @Override
    public List<ProductBlastFurnaceSpeed> selectProductBlastFurnaceSpeedList(ProductBlastFurnaceSpeed productBlastFurnaceSpeed)
    {
        return productBlastFurnaceSpeedMapper.selectProductBlastFurnaceSpeedList(productBlastFurnaceSpeed);
    }

    /**
     * 新增出铁流速流量预报
     * 
     * @param productBlastFurnaceSpeed 出铁流速流量预报
     * @return 结果
     */
    @Override
    public int insertProductBlastFurnaceSpeed(ProductBlastFurnaceSpeed productBlastFurnaceSpeed)
    {
        return productBlastFurnaceSpeedMapper.insertProductBlastFurnaceSpeed(productBlastFurnaceSpeed);
    }

    /**
     * 修改出铁流速流量预报
     * 
     * @param productBlastFurnaceSpeed 出铁流速流量预报
     * @return 结果
     */
    @Override
    public int updateProductBlastFurnaceSpeed(ProductBlastFurnaceSpeed productBlastFurnaceSpeed)
    {
        return productBlastFurnaceSpeedMapper.updateProductBlastFurnaceSpeed(productBlastFurnaceSpeed);
    }

    /**
     * 批量删除出铁流速流量预报
     * 
     * @param blastFurnaceSpeedIds 需要删除的出铁流速流量预报主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceSpeedByBlastFurnaceSpeedIds(String blastFurnaceSpeedIds)
    {
        return productBlastFurnaceSpeedMapper.deleteProductBlastFurnaceSpeedByBlastFurnaceSpeedIds(Convert.toStrArray(blastFurnaceSpeedIds));
    }

    /**
     * 删除出铁流速流量预报信息
     * 
     * @param blastFurnaceSpeedId 出铁流速流量预报主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceSpeedByBlastFurnaceSpeedId(Long blastFurnaceSpeedId)
    {
        return productBlastFurnaceSpeedMapper.deleteProductBlastFurnaceSpeedByBlastFurnaceSpeedId(blastFurnaceSpeedId);
    }
}
